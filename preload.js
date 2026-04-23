const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('gorillaAI', {
    sendChat: (message) => ipcRenderer.invoke('deepseek-request', message)
});