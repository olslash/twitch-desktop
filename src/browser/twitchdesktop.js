'use strict';

var app = require('app'),
    BrowserWindow = require('browser-window'),
    mainWindow = null;

app.commandLine.appendSwitch('remote-debugging-port', '9777');
app.on('window-all-closed', function() {
    if (process.platform != 'darwin')
        app.quit();
});
app.on('ready', function() {
    var protocol = require('protocol');
    protocol.registerProtocol('dash', function(request) {
        var url = request.url.substr(7);
        return new protocol.RequestFileJob(path.normalize(__dirname + '/' + url));
    });

    mainWindow = new BrowserWindow({
        width: 1280,
        height: 720,
        resizable: true,
        frame: true
    });
    mainWindow.loadUrl('file://' + __dirname + '/../renderer/index.html');

    mainWindow.on('closed', function() {
        mainWindow = null;
    });
});
