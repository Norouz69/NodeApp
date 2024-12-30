const express = require('express');
const os = require('os');
const platform = require('platform');
const requestIp = require('request-ip');

const app = express();

app.get('/redirect', (req, res) => {
  const originalUrl = req.query.url || 'https://www.youtube.com';
  const ipAddress = req.headers['x-forwarded-for']?.split(',')[0] || requestIp.getClientIp(req);
  const userAgent = req.headers['user-agent'];

  // Get the username of the user (server-side username)
  const username = os.userInfo().username;

  // Placeholder for connected devices
  const devices = getConnectedDevices();

  // Get the version of Windows (server-side)
  const windowsVersion = platform.version();

  // Log details
  console.log(`Original URL: ${originalUrl}`);
  console.log(`Client IP: ${ipAddress}`);
  console.log(`User Agent: ${userAgent}`);
  console.log(`Username: ${username}`);
  console.log(`Connected Devices: ${devices}`);
  console.log(`Windows Version: ${windowsVersion}`);

  // Redirect the user to the original URL
  res.redirect(302, originalUrl);
});

function getConnectedDevices() {
  // Placeholder implementation for connected devices
  return "1 device connected: Computer1";
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});
