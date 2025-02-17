/**
 * @author Douglas Kitagawa (sdkitagawa, dkitagawa)
 * @file ping.js
 * @param {Client} client
 * @param {Interaction} interaction
 */
module.exports = {
    name: 'ping',
    description: 'Checks the current ping of your Discord Client and Discord\'s Websocket ping.',
    //devOnly: Boolean,
    //testOnly: Boolean,
    //deleted: true,
    //options: Object[],

    callback: async (client, interaction) => {
        await interaction.deferReply();

        const reply = await interaction.fetchReply();

        const ping = reply.createdTimestamp - interaction.createdTimestamp;

      interaction.editReply(`# Pong ～\n\n**Client Ping**: ${ping}ms \`|\` **Websocket Ping**: ${client.ws.ping}ms`);
    }
};
