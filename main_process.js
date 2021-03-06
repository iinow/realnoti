// Basic init
const electron = require('electron')
const { app, BrowserWindow, Notification, globalShortcut } = require('electron')

// Let electron reloads by itself when webpack watches changes in ./app/
//require('electron-reload')(__dirname)
require('electron-reload')
// require('electron-debug')()

// To avoid being garbage collected
let mainWindow

function createWindow() {
    // Create the browser window.
    win = new BrowserWindow({
        width: 1024,
        height: 728,
        minWidth: 600, // set a min width!
        minHeight: 300, // and a min height!
        // Remove the window frame from windows applications
        frame: false,
        // Hide the titlebar from MacOS applications while keeping the stop lights
        titleBarStyle: 'hidden', // or 'customButtonsOnHover',
    })

    // and load the index.html of the app.
    win.loadURL('file://' + __dirname + '/app/index.html')
    console.log('file://' + __dirname + '/app/index.html')

    // Open the DevTools.
    // win.webContents.openDevTools()

    // Emitted when the window is closed.
    win.on('closed', () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        win = null
    })

    let server = require('./app/src/server/server.js')
    console.log('electron create')

    let myNotification = new Notification('Title', {
        body: 'Lorem Ipsum Dolor Sit Amet'
    })

    myNotification.onclick = () => {
        console.log('Notification clicked')
    }

    myNotification.show()

    globalShortcut.register('CommandOrControl+X', () => {
        win.webContents.openDevTools()
    })
}

app.on('ready', createWindow)

// app.on('ready', () => {

//     mainWindow = new BrowserWindow({ width: 800, height: 600 })

//     mainWindow.loadURL(`file://${__dirname}/app/index.html`)

// })

app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
        createWindow()
    }
    console.log('electron activate')
})

app.on('will-quit', () => {
    // globalShortcut.unregister('CommandOrControl+X')
    globalShortcut.unregisterAll()
})