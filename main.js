const electron = require('electron'),
    { app , BrowserWindow } = electron,
    url = require('url'),
    path = require('path');

let mainWindow;
app.on('ready',()=>{
    mainWindow = new BrowserWindow({
        width:1000,
        height:800
    });
    const startUrl = process.env.ELECTRON_START_URL || URL.format({
        path: path.join(__dirname,'..','build','index.html'),
        protocol:'file:',
        slashes:true,
    })
    mainWindow.loadURL(startUrl);

    mainWindow.on('closed',()=>{
        app.quit();
        mainWindow = null;
    })
});