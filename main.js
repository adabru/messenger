var {app, BrowserWindow} = require('electron'),
  fs = require('fs')

app.on('window-all-closed', app.quit)

app.setPath('userData', `${__dirname}/userData`)

app.on('ready', () => {
  win = new BrowserWindow({
    webPreferences: {
      nodeIntegration: false,
      webviewTag: true
    },
    width: 960,
    height: 540
  })

  win.loadURL(`file://${__dirname}/main.html`)
  // win.webContents.openDevTools()
})
