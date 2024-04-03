/**
 * @author Douglas Kitagawa (sdkitagawa, dkitagawa)
 * @file logger.js
 */
const { ActivityType } = require("discord.js");

module.exports = (client) => {
  let botStatus = [
    {
      name: "Moogle's Tasks",
      type: ActivityType.Playing
    },
    {
      name: "The Legend of DK and Friends",
      type: ActivityType.Watching
    },
    {
      name: "Lion Dance",
      type: ActivityType.Listening
    },
  ]

  console.log(`${client.user.tag} is online. ✅`);
  console.log(`キタガワさん ～ お帰りなさい！！　I'm already online with ${client.users.cache.size} users and working on ${client.guilds.cache.size} servers.　✅`);

  setInterval(() => {
    let timeRandomizer = Math.floor(Math.random() * botStatus.length);
    client.user.setActivity(botStatus[timeRandomizer]);
  }, 60000);
};
