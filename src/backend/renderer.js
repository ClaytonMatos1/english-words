const { ipcMain } = require('electron');

ipcMain.on('test', (event, arg) => {
    console.log(arg);

    event.reply('test', 'pong');
});