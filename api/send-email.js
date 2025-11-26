import mongoose from "mongoose";
import nodemailer from "nodemailer";

// For local development with `vercel dev` or similar
if (process.env.NODE_ENV !== "production") {
  // Dynamically import to avoid bundler complaints if dotenv isn't installed in production
  // eslint-disable-next-line global-require, import/no-extraneous-dependencies
  const dotenv = await import("dotenv");
  dotenv.config();
}

const {
  MONGODB_URI,
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

// Reuse DB connection across invocations
let cached = globalThis._mongooseConnection;
if (!cached) {
  cached = globalThis._mongooseConnection = { conn: null, promise: null };
}

async function connectToDatabase() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then((mongooseInstance) => {
      return mongooseInstance;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    location: { type: String },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

const ContactMessage =
  mongoose.models.ContactMessage || mongoose.model("ContactMessage", contactSchema);

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: Number(SMTP_PORT),
  secure: SMTP_SECURE === "true",
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { name, email, location, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email, and message are required." });
  }

  try {
    await connectToDatabase();

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

    return res.json({ success: true });
  } catch (error) {
    console.error("Failed to process contact form:", error);
    return res.status(500).json({ error: "Unable to send your message at the moment." });
  }
}


