/**
 * @author Douglas Kitagawa (sdkitagawa, dkitagawa)
 * @file command_handler.js
 */
const { developerUser, betaTest } = require('../../../settings.json');
const localCommandsPicker = require('../../utils/local_commands_picker');

module.exports = async (client, interaction) => {
  if (!interaction.isChatInputCommand()) return;

  const localCommands = localCommandsPicker();

  try {
    const commandObject = localCommands.find(
      (cmd) => cmd.name === interaction.commandName
    );

    if (!commandObject) return;

    if (commandObject.devOnly) {
      if (!developerUser.includes(interaction.member.id)) {
        await interaction.deferReply({
          content: 'Only developers are allowed to run this command.',
          ephemeral: true
        });
        return;
      }
    }

    if (commandObject.testOnly) {
      if (!(interaction.guild.id === betaTest)) {
        await interaction.deferReply({
          content: 'This command cannot be ran here.',
          ephemeral: true
        });
        return;
      }
    }

    if (commandObject.permissionsRequired?.length) {
      for (const permission of commandObject.permissionsRequired) {
        if (!interaction.member.permissions.has(permission)) {
          await interaction.deferReply({
            content: 'Not enough permissions.',
            ephemeral: true
          });
          return;
        }
      }
    }

    if (commandObject.botPermissions?.length) {
      for (const permission of commandObject.botPermissions) {
        const bot = interaction.guild.members.me;

        if (!bot.permissions.has(permission)) {
          await interaction.deferReply({
            content: "I don't have enough permissions.",
            ephemeral: true
          });
          return;
        }
      }
    }

    await commandObject.callback(client, interaction);
  } catch (error) {
    console.log(`There was an error running this command: ${error}`);
  }
};
