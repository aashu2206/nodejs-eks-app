const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('./certs/key.pem'),
  cert: fs.readFileSync('./certs/cert.pem')
};

https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end("Hello from Node.js on HTTPS in EKS!");
}).listen(443, () => {
  console.log("Server running on https://localhost:443");
});
