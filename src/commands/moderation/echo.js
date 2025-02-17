/**
 * @author Douglas Kitagawa (sdkitagawa, dkitagawa)
 * @file echo.js
 * @param {Client} client
 * @param {Interaction} interaction
 */
const {
    Client,
    Interaction,
    ApplicationCommandOptionType,
    PermissionFlagsBits
} = require('discord.js');

module.exports = {
    name: 'echo',
    description: 'Sends a message through the bot.【Administration Command】',
    //devOnly: Boolean,
    //testOnly: Boolean,
    //deleted: true,
    options: [
        {
            name: 'channel',
            description: 'The channel where the command is going to be sent in.',
            type: ApplicationCommandOptionType.Channel,
            required: true,
        },
        {
            name: 'message',
            description: 'The message that you want you to send.',
            type: ApplicationCommandOptionType.String,
            required: true,
        },
    ],
    permissionsRequired: [PermissionFlagsBits.Administrator],
    botPermissions: [PermissionFlagsBits.Administrator],

    callback: async (client, interaction) => {

        const channelId = interaction.options.getChannel('channel');
        const messageContent = interaction.options.getString('message');

        // Send the message
        try {
            await interaction.channel.send(messageContent);
            await interaction.reply({ content: `The message was sent in ${channelId}.`, ephemeral: true });
        } catch (error) {
            console.log(`There was an error when Sending the message: ${error}`);
        }
    },
};
