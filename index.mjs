import express from "express";
import fetch from "node-fetch";

const app = express();
const PORT = 3000;

// Handle proxy requests
app.get("/proxy", async (req, res) => {
  try {
    const url = req.query.url;
    const response = await fetch(url);
    const html = await response.text();
    res.send(html);
  } catch (error) {
    res.status(500).send("Error fetching content");
  }
});

// Serve HTML page with iframe
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
