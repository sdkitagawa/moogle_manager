/**
 * @author Douglas Kitagawa (sdkitagawa, dkitagawa)
 * @file event_handler.js
 */
const path = require('path');
const filePicker = require('../utils/file_picker');

module.exports = (client) => {
  const eventFolders = filePicker(path.join(__dirname, '..', 'events'), true);

  for (const eventFolder of eventFolders) {
    const eventFiles = filePicker(eventFolder);
    eventFiles.sort((a, b) => a > b);

    const eventName = eventFolder.replace(/\\/g, '/').split('/').pop();

    client.on(eventName, async (arg) => {
      for (const eventFile of eventFiles) {
        const eventFunction = require(eventFile);
        await eventFunction(client, arg);
      }
    });
  }
};
