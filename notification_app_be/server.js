const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let notifications = [];

// GET all notifications
app.get("/notifications", (req, res) => {
  res.json(notifications);
});

// POST new notification
app.post("/notifications", (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message required" });
  }

  const newNotification = {
    id: Date.now(),
    message,
  };

  notifications.push(newNotification);

  res.json({ success: true, data: newNotification });
});

app.listen(5000, () => {
  console.log("🚀 Backend running on http://localhost:5000");
});
