module.exports = {
  name: 'ping',
  description: 'Check the current ping of your Discord Client and Discord\'s Websocket ping.',
  //devOnly: Boolean,
  //testOnly: true,
  //options: Object[],
  //deleted: true,

  callback: async (client, interaction) => {
    await interaction.deferReply();
    
    const reply = await interaction.fetchReply();

    const ping = reply.createdTimestamp - interaction.createdTimestamp;

    interaction.editReply(`# Pong ～\n\n**Client Ping**: ${ping}ms \`|\` **Websocket Ping**: ${client.ws.ping}ms`);
  },
};
