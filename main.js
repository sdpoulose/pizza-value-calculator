const { app, BrowserWindow } = require('electron');

function createWindow() {
    const window = new BrowserWindow({
        width: 1200,
        height: 800,
        backgroundColor: "white",
        webPreferences: {
            nodeIntegration: true,
            worldSafeExecuteJavaScript: true,
            contextIsolation: true
        }
    })

    window.loadFile('index.html');
}

app.whenReady().then(createWindow)