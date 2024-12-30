const express = require('express');
const os = require('os');
const platform = require('platform');
const requestIp = require('request-ip');

const app = express();

app.get('/redirect', (req, res) => {
  const originalUrl = req.query.url;
  const ipAddress = requestIp.getClientIp(req);
  const userAgent = req.headers['user-agent'];

  // Get the username of the user
  const username = os.userInfo().username;

  // Get the number of connected devices
  const devices = getConnectedDevices();

  // Get the operating system information
  const osInfo = platform.os;

  // Log the original URL, actual IP, username, connected devices, and OS info
  console.log(`Original URL: ${originalUrl}`);
  console.log(`Actual IP: ${ipAddress}`);
  console.log(`Username: ${username}`);
  console.log(`Connected Devices: ${devices}`);
  console.log(`Operating System Info: ${osInfo}`);

  // Redirect the user to the original URL
  res.redirect(302, originalUrl);
});

function getConnectedDevices() {
  // Placeholder value for connected devices
  return "1 device connected: Computer1";
}

app.listen(5000, '0.0.0.0', () => {
  console.log('Server is running on port 5000');
});
