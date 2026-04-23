const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const axios = require('axios');

// --- REALGORILLA OS: WebGL 2.0 & GPU Hack ---
app.commandLine.appendSwitch('enable-webview');
app.commandLine.appendSwitch('enable-webgl2');
app.commandLine.appendSwitch('ignore-gpu-blacklist');
app.disableDomainBlockingFor3DAPIs();
// ------------------------------------------

const OPENROUTER_API_KEY = "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";

function createWindow() {
    const win = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true,
            nodeIntegration: false,
            webgl: true,
            webviewTag: true
        }
    });
    win.loadFile('index.html');
}

ipcMain.handle('deepseek-request', async (event, userPrompt) => {
    try {
        const response = await axios.post(
            'https://openrouter.ai/api/v1/chat/completions',
            {
                model: "openrouter/auto",
                messages: [{ role: "user", content: userPrompt }]
            },
            {
                headers: {
                    'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
                    'Content-Type': 'application/json'
                }
            }
        );
        return response.data.choices[0].message.content;
    } catch (error) {
        console.error('OpenRouter error:', error.response?.data || error.message);
        return "Error: " + (error.response?.data?.error?.message || error.message);
    }
});

app.whenReady().then(createWindow);