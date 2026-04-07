const Message = require('../models/Message');
const nodemailer = require('nodemailer');

exports.submitContactMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'Please provide all details' });
    }

    // 1. Save to Database
    const newMessage = await Message.create({ name, email, message });

    // 2. Setup Nodemailer Transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // 3. Send Notification to Portfolio Owner
    await transporter.sendMail({
      from: `Portfolio Contact <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: `New Portfolio Message from ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px;">
          <h3 style="color: #4f46e5;">New Message Received:</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <blockquote style="border-left: 4px solid #e5e7eb; padding-left: 10px; color: #374151;">
            ${message}
          </blockquote>
        </div>
      `
    });

    // 4. Auto-reply to User
    await transporter.sendMail({
      from: `Pinaki Rath <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Thank you for reaching out, ${name}!`,
      html: `
        <div style="font-family: sans-serif; padding: 20px;">
          <p>Hi ${name},</p>
          <p>Thank you for getting in touch through my portfolio. I have successfully received your message and will get back to you shortly.</p>
          <br/>
          <p>Best regards,<br/><strong>Pinaki Rath</strong></p>
        </div>
      `
    });

    res.status(201).json({ success: true, data: newMessage });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error processing request.' });
  }
};

exports.getMessages = async (req, res) => {
  try {
    const messages = await Message.find().sort('-createdAt');
    res.status(200).json({ success: true, count: messages.length, data: messages });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to retrieve messages' });
  }
};
