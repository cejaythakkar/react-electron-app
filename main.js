const electron = require('electron');

const { app , BrowserWindow } = electron;

let mainWindow;
app.on('ready',()=>{
    mainWindow = new BrowserWindow({
        width:1000,
        height:800
    });

    mainWindow.loadURL('http://localhost:3000');

    mainWindow.on('closed',()=>{
        app.quit();
        mainWindow = null;
    })
});