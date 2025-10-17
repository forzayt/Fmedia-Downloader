# Fmedia-Downloader

A modern, cross-platform media downloader application built with Electron and yt-dlp. Download videos and audio from various websites with a beautiful, intuitive interface.

## ✨ Features

- 🎬 **Multi-format Support**: Download videos and audio from various platforms
- 🎨 **Modern UI**: Beautiful, responsive interface with glassmorphism design
- 📱 **Cross-platform**: Works on Windows, macOS, and Linux
- ⚡ **Fast Downloads**: Powered by yt-dlp for high-speed downloads
- 🔧 **Quality Selection**: Choose from multiple quality options
- 📁 **Auto Organization**: Automatically organizes downloads in a dedicated folder
- 🖥️ **Desktop App**: Native desktop experience with Electron

## 🚀 Requirements

- Node.js (v14 or higher)
- yt-dlp (included in the package)
- FFmpeg tools (optional, for advanced processing)

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/Fmedia-Downloader.git
   cd Fmedia-Downloader
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the application:
   ```bash
   npm start
   ```

## 💻 Usage

1. **Enter URL**: Copy and paste the media URL you want to download
2. **Select Quality**: Choose your preferred quality from the available options
3. **Start Download**: Click the download button and watch the progress
4. **View Logs**: Monitor download progress and status in the built-in log viewer

## 📁 Project Structure

```
Fmedia-Downloader/
├── main.js              # Main Electron process
├── preload.js           # Preload script for renderer process
├── src/
│   └── renderer/
│       └── index.html   # Main UI interface
├── downloads/           # Downloaded files directory
├── yt-dlp.exe          # yt-dlp executable
├── ffmpeg.exe          # FFmpeg executable (optional)
├── ffplay.exe          # FFmpeg player (optional)
└── ffprobe.exe         # FFmpeg probe tool (optional)
```

## 🛠️ Development

### Tech Stack

- **Frontend**: HTML5, CSS3, Bootstrap 5
- **Backend**: Electron.js
- **Download Engine**: yt-dlp
- **Build Tools**: Node.js, npm

### Scripts

- `npm start` - Start the application in development mode
- `npm test` - Run tests (not implemented yet)

## 🔧 Configuration

The app automatically creates a `downloads` folder for saving downloaded files. You can modify the output path in `main.js` if needed.

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/yourusername/Fmedia-Downloader/issues) page
2. Create a new issue with detailed description
3. Provide logs and system information for better debugging

## 🙏 Acknowledgments

- [yt-dlp](https://github.com/yt-dlp/yt-dlp) - The powerful download engine
- [Electron](https://www.electronjs.org/) - The cross-platform desktop framework
- [Bootstrap](https://getbootstrap.com/) - The UI framework

---

Made with ❤️ using Electron