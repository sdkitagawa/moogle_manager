/**
 * @author Douglas Kitagawa (sdkitagawa, dkitagawa)
 * @file register_commands.js
 */
const { testServer } = require('../../../settings.json');
const differentChecker = require('../../utils/different_checker');
const appCommandsPicker = require('../../utils/app_commands_picker');
const localCommandsPicker = require('../../utils/local_commands_picker');

module.exports = async (client) => {
  try {
    const localCommands = localCommandsPicker();
    const applicationCommands = await appCommandsPicker(
      client,
      testServer
    );

    for (const localCommand of localCommands) {
      const { name, description, options } = localCommand;

      const existingCommand = await applicationCommands.cache.find(
        (cmd) => cmd.name === name
      );

      if (existingCommand) {
        if (localCommand.deleted) {
          await applicationCommands.delete(existingCommand.id);
          console.log(`Temporary deleted commands "${name}". 🗑`);
          continue;
        }

        if (differentChecker(existingCommand, localCommand)) {
          await applicationCommands.edit(existingCommand.id, {
            description,
            options
          });

          console.log(`Edited command: "${name}". 🔁`);
        }
      } else {
        if (localCommand.deleted) {
          console.log(
            `Skipping the registration of this command: "${name}" as it is set to be removed. ⏩`
          );
          continue;
        }

        await applicationCommands.create({
          name,
          description,
          options
        });

        console.log(`Registered command: "${name}." ✍🏻`);
      }
    }
  } catch (error) {
    console.log(`TThere was an error: ${error}`);
  }
};
