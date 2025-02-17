/**
 * @author Douglas Kitagawa (sdkitagawa, dkitagawa)
 * @file timeout.js
 * @param {Client} client
 * @param {Interaction} interaction
 */
const { Client, Interaction, ApplicationCommandOptionType, PermissionFlagsBits } = require('discord.js');
const ms = require('ms');

module.exports = {
    name: 'timeout',
    description: 'Mutes a member of the server.【Moderation Command】',
    //devOnly: Boolean,
    //testOnly: Boolean,
    //deleted: true,
    options: [
        {
            name: 'target_user',
            description: 'The user you want to timeout.',
            type: ApplicationCommandOptionType.Mentionable,
            required: true
        },
        {
            name: 'duration',
            description: 'Timeout duration (30m, 1h, 1d).',
            type: ApplicationCommandOptionType.String,
            required: true
        },
        {
            name: 'reason',
            description: 'The reason for the timeout.',
            type: ApplicationCommandOptionType.String,
            required: false,
        }
    ],
    permissionsRequired: [PermissionFlagsBits.MuteMembers],
    botPermissions: [PermissionFlagsBits.MuteMembers],

    callback: async (client, interaction) => {
        const mentionable = interaction.options.get('target_user').value;
        const duration = interaction.options.get('duration').value;
        const reason = interaction.options.get('reason')?.value || "No reason provided";

        await interaction.deferReply();

        const targetUser = await interaction.guild.members.fetch(mentionable);
        if (!targetUser) {
            await interaction.editReply("**That user does not exist in this server.**");
            return;
        }

        if (targetUser.user.bot) {
            await interaction.editReply("**I cannot timeout a bot.**");
            return;
        }

        const msDuration = ms(duration);
        if (isNaN(msDuration)) {
            await interaction.editReply("**Please provide a valid timeout duration.**");
            return;
        }

        if (msDuration < 5000 || msDuration > 2.419e9) {
            await interaction.editReply("**Timeout duration cannot be less than 5 seconds or more than 28 days.**");
            return;
        }

        // Highest role of the target user
        const targetUserRolePosition = targetUser.roles.highest.position;
        // Highest role of the User running the command
        const requestUserRolePosition = interaction.member.roles.highest.position;
        // Highest role of the Bot
        const botRolePosition = interaction.guild.members.me.roles.highest.position;

        if (targetUserRolePosition >= requestUserRolePosition) {
            await interaction.editReply("**You cannot timeout that user because they have the same (or a higher) role than you.**");
            return;
        }

        if (targetUserRolePosition >= botRolePosition) {
            await interaction.editReply("**I cannot timeout that user because they have the same (or a higher) role than me.**");
            return;
        }

        // Timeout the User
        try {
            const { default: prettyMs } = await import('pretty-ms');

            if (targetUser.isCommunicationDisabled()) {
                await targetUser.timeout(msDuration, reason);
                await interaction.editReply(`**${targetUser} timeout has been updated to ${prettyMs(msDuration, { verbose: true })}\n**Reason**: \`${reason}\`.`);
                return;
            }

            await targetUser.timeout(msDuration, reason);
            await interaction.editReply(`**${targetUser} was timed out for ${prettyMs(msDuration, { verbose: true })}**.\n**Reason**: \`${reason}\`.`);

        } catch (error) {
            console.log(`There was an error when timing out: ${error}`);
        }
    }
}
