/**
 * @author Douglas Kitagawa (sdkitagawa, dkitagawa)
 * @file kick.js
 * @param {Client} client
 * @param {Interaction} interaction
 */
const {
    Client,
    Interaction,
    ApplicationCommandOptionType,
    PermissionFlagsBits,
  } = require('discord.js');
  
  module.exports = {
      callback: async (client, interaction) => {
        const targetUserId = interaction.options.get('target_user').value;
        const reason = interaction.options.get('reason')?.value || "No reason provided**";
  
        await interaction.deferReply();
  
        const targetUser = await interaction.guild.members.fetch(targetUserId);
  
        if (!targetUser) {
          await interaction.editReply("**That user does not exist in this server**");
          return;
        }
  
        if (targetUser.id === interaction.guild.ownerId) {
          await interaction.editReply("**You cannot kick that user because they are the server owner**");
          return;
        }
  
        // Highest role of the target user
        const targetUserRolePosition = targetUser.roles.highest.position;
        // Highest role of the User running the command
        const requestUserRolePosition = interaction.member.roles.highest.position;
        // Highest role of the Bot
        const botRolePosition = interaction.guild.members.me.roles.highest.position;
  
        if (targetUserRolePosition >= requestUserRolePosition) {
          await interaction.editReply("**You cannot kick that user because they have the same (or a higher) role than you**");
          return;
        }
  
        if (targetUserRolePosition >= botRolePosition) {
          await interaction.editReply("**I cannot kick that user because they have the same (or a higher) role than me**");
          return;
        }
  
        // Kick the User
        try {
          await targetUser.kick(reason);
          await interaction.editReply(`**User:** ${targetUser} was kicked!\n**Reason:** \`${reason}\`.**`);
        } catch (error) {
          console.log(`There was an error when kicking: ${error}`);
        }
    },
  
    name: 'kick',
    description: 'Kicks a member from the server.',
    //deleted: true,
    //devOnly: Boolean,
    //testOnly: Boolean,
    options: [
      {
        name: 'target_user',
        description: 'The user that you want to kick.',
        type: ApplicationCommandOptionType.Mentionable,
        required: true,
      },
      {
        name: 'reason',
        description: 'The reason why this member is being kicked.',
        type: ApplicationCommandOptionType.String,
      },
    ],
    permissionsRequired: [PermissionFlagsBits.KickMembers],
    botPermissions: [PermissionFlagsBits.KickMembers],
  };
