import UnicornScene from "unicornstudio-react";

/**
 * UnicornBackground — Full-screen animated background using UnicornStudio.
 * Place this as the first child of a `relative` positioned container.
 * z-index is kept at 0 so content layered above it is always visible.
 */
export default function UnicornBackground() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      {/* UnicornStudio animated scene */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          minWidth: "100%",
          minHeight: "100%",
        }}
      >
        <UnicornScene
          projectId="1jmr6w4moxUost9n9qJh"
          width="1440px"
          height="900px"
          scale={1}
          dpi={1.5}
          sdkUrl="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@2.1.0-1/dist/unicornStudio.umd.js"
        />
      </div>

      {/* Gradient overlay — improves text readability on top of the animation */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(6,7,12,0.25) 0%, rgba(6,7,12,0.05) 50%, rgba(6,7,12,0.85) 100%)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
