import validator from 'validator';

export const validateContactInput = (req, res, next) => {
  const { name, email, message } = req.body;

  if (!name || validator.isEmpty(name.trim())) {
    return res.status(400).json({ message: 'Name is required' });
  }

  if (!email || !validator.isEmail(email)) {
    return res.status(400).json({ message: 'Valid email is required' });
  }

  if (!message || validator.isEmpty(message.trim())) {
    return res.status(400).json({ message: 'Message is required' });
  }

  // Sanitize the inputs
  req.body.name = validator.escape(name.trim());
  req.body.email = validator.normalizeEmail(email);
  req.body.message = validator.escape(message.trim());

  next();
};

export const adminAuth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Not authorized, no token' });
  }

  const token = authHeader.split(' ')[1];
  // Simplistic admin auth using ENV token
  if (token !== process.env.ADMIN_TOKEN) {
    return res.status(401).json({ message: 'Not authorized, invalid token' });
  }

  next();
};
