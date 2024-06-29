import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import musicianProfileRoutes from "./routes/musicianProfile.routes.js";
import fanProfileRoutes from "./routes/fanProfile.routes.js";
import eventRoutes from "./routes/event.routes.js";
import ticketRoutes from "./routes/ticket.routes.js";
import paymentRoutes from "./routes/payment.routes.js";
import nodemailer from "nodemailer";

const app = express();

app.use(
  express.json({
    limit: "32kb",
  })
);
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);
app.use(cookieParser());
app.use(
  express.urlencoded({
    limit: "32kb",
  })
);
app.use(express.static("public"));

// Define Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/musicianProfiles", musicianProfileRoutes);
app.use("/api/fanProfiles", fanProfileRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/tickets", ticketRoutes);
app.use("/api/payments", paymentRoutes);

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/api/contact", async (req, res) => {
  // console.log(req.body.name);
  const { name, email, message } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "vibe46352@gmail.com",
    subject: "New Contact Form Submission",
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Error sending email" });
  }
});

export { app };
