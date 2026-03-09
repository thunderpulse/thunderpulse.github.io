import { memo, useEffect, useRef } from "react";
import UnicornScene from "unicornstudio-react";

/**
 * AnimatedBackground — GPU-optimised full-screen UnicornStudio background.
 *
 * Performance:  dpi=1, scale=0.85, React.memo, will-change:transform
 * Branding:     Dual strategy —
 *   1) DOM removal via MutationObserver + polling
 *   2) Visual clip via clip-path to cut the bottom 80px where the badge sits
 */
const AnimatedBackground = memo(function AnimatedBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    // DOM removal — covers standard DOM badges
    const removeBadge = () => {
      const selectors = [
        'a[href*="unicorn.studio"]',
        'a[href*="unicorn"]',
        'img[alt*="unicorn"]',
      ];
      const root = containerRef.current || document;
      selectors.forEach((sel) => {
        root.querySelectorAll?.(sel)?.forEach((el) => el.remove());
        if (root !== document) {
          document.querySelectorAll(sel).forEach((el) => el.remove());
        }
      });
    };

    removeBadge();
    const observer = new MutationObserver(removeBadge);
    observer.observe(containerRef.current || document.body, {
      childList: true,
      subtree: true,
    });
    const interval = setInterval(removeBadge, 400);
    setTimeout(removeBadge, 1500);
    setTimeout(removeBadge, 3000);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        pointerEvents: "none",
        overflow: "hidden",
        willChange: "transform",
        /*
         * Clip the bottom ~80px to visually remove the "Made with" badge.
         * inset(top right bottom left) – we only clip the bottom edge.
         * This is the nuclear option — even if the badge is in shadow DOM
         * or canvas, it simply won't be visible.
         */
        clipPath: "inset(0 0 80px 0)",
      }}
    >
      <UnicornScene
        projectId="zuBZKFW4C3TvYxoPiKAc"
        width="100%"
        height="100%"
        scale={0.85}
        dpi={1}
        sdkUrl="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@2.1.0-1/dist/unicornStudio.umd.js"
      />

      {/* Vignette overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 120% 100% at 50% 0%, transparent 40%, rgba(4,4,16,0.65) 100%)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
});

export default AnimatedBackground;