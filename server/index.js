import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import nodemailer from "nodemailer";

dotenv.config();

const {
  PORT = 5000,
  MONGODB_URI,
  CLIENT_ORIGIN,
  SMTP_HOST,
  SMTP_PORT = 587,
  SMTP_USER,
  SMTP_PASS,
  SMTP_SECURE = "false",
  MAIL_FROM,
  MAIL_TO,
} = process.env;

if (!MONGODB_URI) {
  throw new Error("Missing MONGODB_URI in environment variables.");
}

if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
  throw new Error("Missing SMTP configuration (SMTP_HOST, SMTP_USER, SMTP_PASS).");
}

const app = express();

app.use(
  cors({
    origin: CLIENT_ORIGIN ? CLIENT_ORIGIN.split(",") : "*",
  })
);
app.use(express.json());

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    location: { type: String },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

const ContactMessage = mongoose.model("ContactMessage", contactSchema);

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: Number(SMTP_PORT),
  secure: SMTP_SECURE === "true",
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
});

app.post("/send-email", async (req, res) => {
  const { name, email, location, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email, and message are required." });
  }

  try {
    await ContactMessage.create({ name, email, location, message });

    const ownerMail = {
      from: MAIL_FROM || SMTP_USER,
      to: MAIL_TO || SMTP_USER,
      subject: `📬 New contact from ${name}`,
      text: `You have a new contact submission:

Name: ${name}
Email: ${email}
Location: ${location || "Not provided"}
Message:
${message}
`,
    };

    const userMail = {
      from: MAIL_FROM || SMTP_USER,
      to: email,
      subject: "Thanks for connecting with us!",
      text: `Hi ${name},

Thanks for reaching out. We received your message and will get back to you soon.

Your message:
${message}

Best regards,
Portfolio Team`,
    };

    await Promise.all([transporter.sendMail(ownerMail), transporter.sendMail(userMail)]);

    res.json({ success: true });
  } catch (error) {
    console.error("Failed to process contact form:", error);
    res.status(500).json({ error: "Unable to send your message at the moment." });
  }
});

const startServer = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB");

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();


