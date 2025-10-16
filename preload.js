const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  downloadVideo: (url, quality) =>
    ipcRenderer.send("download-video", url, quality),
  onLog: (callback) => ipcRenderer.on("download-log", (e, data) => callback(data)),
  onFinished: (callback) =>
    ipcRenderer.on("download-finished", (e, code) => callback(code)),
});
