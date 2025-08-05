const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Node.js DevOps App v2</title>
    </head>
    <body style="font-family: Arial, sans-serif; background-color: #f0f4f8; text-align: center; padding-top: 50px;">
      <h1 style="color: #2b6cb0; font-size: 36px;">
        🚀 Welcome to the Node.js DevOps Demo!
      </h1>
      <p style="font-size: 20px; color: #2d3748;">
         This app is built with <strong>Node.js + Express</strong><br>
        Containerized with <strong>Docker</strong><br>
         Deployed using <strong>Kubernetes</strong><br>
         Automated by <strong>GitHub Actions CI/CD</strong>
      </p>
      <p style="font-size: 18px; color: #4a5568;">
        Build. Ship. Scale. 🚢
      </p>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(` Server is running at http://localhost:${PORT}`);
});
