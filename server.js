const https = require('https');
const fs = require('fs');
const path = require('path');

// Read SSL certificate and key
const options = {
  key: fs.readFileSync(path.join(__dirname, 'certs', 'key.pem')),
  cert: fs.readFileSync(path.join(__dirname, 'certs', 'cert.pem'))
};

// Create HTTPS server
https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end("Hello from Node.js on HTTPS in EKS!");
}).listen(443, () => {
  console.log("✅ Server running on https://localhost:443");
});
