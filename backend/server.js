const express = require('express');
const cors = require('cors');
const { Resend } = require('resend');
require('dotenv').config();

const app = express();

// ===== Middlewares =====
app.use(cors());
app.use(express.json());

// ===== Resend Client =====
const resend = new Resend(process.env.RESEND_API_KEY);

// ===== Test route (optional) =====
app.get('/', (req, res) => {
  res.send('Contact API running');
});

// ===== Contact Route =====
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    await resend.emails.send({
      from: process.env.FROM_EMAIL, // e.g. onboarding@resend.dev
      to: [process.env.TO_EMAIL],   // YOUR email
      replyTo: email,
      subject: `New message from ${name}`,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
    });

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ message: 'Failed to send email' });
  }
});

// ===== Start Server =====
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
