/**
 * @author Douglas Kitagawa (sdkitagawa, dkitagawa)
 * @file server-info.js
 * @param {Client} client
 * @param {Interaction} interaction
 */
const {
    Interaction,
    EmbedBuilder,
    ApplicationCommandOptionType,
    PermissionFlagsBits
} = require('discord.js');

module.exports = {
    name: 'server-info',
    description: 'Provides information about the Guild (Server).',
    //devOnly: Boolean,
    //testOnly: Boolean,
    //deleted: true,
    options: [
        {
            name: 'language',
            description: 'Select the language for the message display.',
            type: ApplicationCommandOptionType.String,
            required: true,
            choices: [
                { name: 'Portuguese (Brazil)', value: 'pt_br' },
                { name: 'English (United States)', value: 'en_us' }
            ],
        },
    ],
    permissionsRequired: [PermissionFlagsBits.UseApplicationCommands],
    botPermissions: [PermissionFlagsBits.UseApplicationCommands],

    callback: async (client, interaction) => {
        const { guild } = interaction;

        if (!guild) {
            console.error("Guild not found.");
            await interaction.reply("Unable to retrieve guild information.");
            return;
        }

        const {
            name,
            ownerId,
            createdTimestamp,
            memberCount
        } = guild;

        const { members } = guild;
        const guildIcon = guild.iconURL() || '';
        const numberOfRoles = guild.roles.cache.size;
        const numberOfEmojis = guild.emojis.cache.size;
        const guildId = guild.id;

        let baseVerification = guild.verificationLevel;

        if (baseVerification == 0) baseVerification = "None"
        if (baseVerification == 1) baseVerification = "Low"
        if (baseVerification == 2) baseVerification = "Medium"
        if (baseVerification == 3) baseVerification = "High"
        if (baseVerification == 4) baseVerification = "Very High"

        const embedContent = {
            pt_br: {
                server_id: "ID do Servidor",
                server_name: "Nome",
                data_created: "Data de Criação",
                server_owner: "Dono do Servidor",
                member_count: "Número de Membros",
                role_count: "Número de Roles",
                emoji_count: "Número de Emojis",
                verification_level: "Nível de Verificação",
                boost_count: "Server Boosts",
                "note": "(passe o mouse para ver a data completa)"
            },
            en_us: {
                server_id: "Server ID",
                server_name: "Name",
                data_created: "Data Created",
                server_owner: "Server Owner",
                member_count: "Number of Members",
                role_count: "Number of Roles",
                emoji_count: "Number ofEmojis",
                verification_level: "Verification Level",
                boost_count: "Server Boosts",
                note: "(hover for complete date)"
            }
        };

        const languageChoice = interaction.options.getString('language') || 'en_us';
        const content = embedContent[languageChoice] || embedContent['en_us'];

        try {
            const embed = new EmbedBuilder()
                .setColor(0xF285B5)
                .setThumbnail(guildIcon)
                .setAuthor({ name: name, iconURL: guildIcon })
                .setFooter({ text: `${content.server_id}: ${guildId}` })
                .setTimestamp()
                .addFields(
                    { name: `${content.server_name}`, value: `${name}`, inline: false },
                    { name: `${content.data_created}`, value: `<t:${parseInt(createdTimestamp / 1000)}:R> ${content.note}`, inline: true },
                    { name: `${content.server_owner}`, value: `<@${ownerId}>`, inline: true },
                    { name: `${content.member_count}`, value: `${memberCount}`, inline: true },
                    { name: `${content.role_count}`, value: `${numberOfRoles}`, inline: true },
                    { name: `${content.emoji_count}`, value: `${numberOfEmojis}`, inline: true },
                    { name: `${content.verification_level}`, value: `${baseVerification}`, inline: true },
                    { name: `${content.boost_count}`, value: `${guild.premiumSubscriptionCount}`, inline: true }
                );

            await interaction.reply({ embeds: [embed] });
        } catch (error) {
            console.error(`Error building the embed: ${error}`);
            await interaction.reply("An error occurred while processing your request.");
        }
    }
};
