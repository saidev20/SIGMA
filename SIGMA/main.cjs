const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    x: 1920 - 800, // Adjust based on screen width
    y: 0, // Align to the top of the screen
    alwaysOnTop: true, // Keep the window always on top
    type: 'toolbar', // Make it behave like an overlay
    frame: false, // Remove the window frame for a cleaner look
    skipTaskbar: true, // Hide from the taskbar
    resizable: true, // Allow resizing the window
    movable: true, // Allow moving the window
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  mainWindow.loadURL('http://localhost:5173'); // Adjust URL if needed

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});