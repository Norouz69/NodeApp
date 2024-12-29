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

  // Get the version of Windows
  const windowsVersion = platform.version;

  // Log the original URL, actual IP, username, connected devices, and Windows version
  console.log(`Original URL: ${originalUrl}`);
  console.log(`Actual IP: ${ipAddress}`);
  console.log(`Username: ${username}`);
  console.log(`Connected Devices: ${devices}`);
  console.log(`Windows Version: ${windowsVersion}`);

  // Redirect the user to the original URL
  res.redirect(302, originalUrl);
});

function getConnectedDevices() {
  // Code to get the number of connected devices and their names
  // This can be platform-specific and may require additional libraries or system calls
  // For example, on Windows, you can use the `net view` command or the `wmic` command
  // On Linux, you can use the `arp` command
  // On macOS, you can use the `arp` command
  // You would need to parse the output of these commands to get the desired information
  // For demonstration purposes, I'll return a placeholder value
  return "1 device connected: Computer1";
}

app.listen(5000, '0.0.0.0', () => {
  console.log('Server is running on port 5000');
});