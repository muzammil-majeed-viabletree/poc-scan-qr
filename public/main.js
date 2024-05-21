const { app, BrowserWindow, systemPreferences } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,

    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true, // add this
    },
  });

  const microphone = systemPreferences.askForMediaAccess("microphone");
  const camera = systemPreferences.askForMediaAccess("camera");
  // win.webContents.print({silent: true})

  win.loadURL("http://localhost:3000"); // Adjust port if needed

  win.webContents.openDevTools(); // Enable DevTools in development mode

  win.on("closed", () => {
    win = null;
  });
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
