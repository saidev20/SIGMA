const { contextBridge } = require('electron');

// Expose APIs to the renderer process securely
contextBridge.exposeInMainWorld('electronAPI', {
  // Add APIs here if needed
});