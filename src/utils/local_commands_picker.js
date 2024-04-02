/**
 * @author Douglas Kitagawa (sdkitagawa, dkitagawa)
 * @file local_commands_picker.js
 */
const path = require('path');
const filePicker = require('./file_picker');

module.exports = (exceptions = []) => {
  let localCommands = [];

  const commandCategories = filePicker(
    path.join(__dirname, '..', 'commands'),
    true
  );

  for (const commandCategory of commandCategories) {
    const commandFiles = filePicker(commandCategory);

    for (const commandFile of commandFiles) {
      const commandObject = require(commandFile);

      if (exceptions.includes(commandObject.name)) {
        continue;
      }

      localCommands.push(commandObject);
    }
  }

  return localCommands;
};
