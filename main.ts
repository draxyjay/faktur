import { app, BrowserWindow } from 'electron';
import * as path from 'path';
import * as url from 'url';
import dotenv from 'dotenv';

dotenv.config();

let win: Electron.BrowserWindow | null;

function createWindow() {
	win = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			nodeIntegration: true,
		},
	});

	console.log(process.env.ENV);

	if (process.env.ENV === 'development') {
		win.loadURL(`http://localhost:4000`);
		//win.webContents.openDevTools();
	} else {
		win.loadURL(
			url.format({
				pathname: path.join(__dirname, 'index.html'),
				protocol: 'file:',
				slashes: true,
			})
		);
	}
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	if (win === null) {
		createWindow();
	}
});
