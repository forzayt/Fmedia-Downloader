const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const { spawn } = require("cross-spawn");

function createWindow() {
  const win = new BrowserWindow({
    width: 700,
    height: 500,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.loadFile("src/renderer/index.html");
}

app.whenReady().then(createWindow);

// IPC to download video
ipcMain.on("download-video", (event, url, quality) => {
  const outputPath = path.join(__dirname, "downloads");
  const args = [
    url,
    "-o",
    `${outputPath}/%(title)s.%(ext)s`,
  ];

  if (quality) args.push("-f", quality); // Optional format

  const ytDlp = spawn(path.join(__dirname, "yt-dlp.exe"), args);

  ytDlp.stdout.on("data", (data) => {
    event.sender.send("download-log", data.toString());
  });

  ytDlp.stderr.on("data", (data) => {
    event.sender.send("download-log", data.toString());
  });

  ytDlp.on("close", (code) => {
    event.sender.send("download-finished", code);
  });
});
