// It's probably best the .json stuff be left alone unless you wana play around with things and merge your branched commit.
// This tells the actual electron app how it will run.

const {app} = require('electron') // get the app module
const {BrowserWindow} = require('electron') // get the BrowserWindow mod

// Below tells electron what to do once we start the npm
app.on('ready', () => {// is the app is on, or ready, it will run this function
  let win = new BrowserWindow({width: 800, height: 600, frame: true})// how the window will be formatted
win.show()
  win.loadURL('file://' +  __dirname + '/index.html')//links to index.html from the machine directly
})
