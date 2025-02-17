/**
 * @author Douglas Kitagawa (sdkitagawa, dkitagawa)
 * @file translate.js
 * @param {Client} client
 * @param {Interaction} interaction
 */
const {
    Client,
    Interaction,
    EmbedBuilder,
    ApplicationCommandOptionType,
    PermissionFlagsBits
} = require('discord.js');
const translate = require('@iamtraction/google-translate');

module.exports = {
    name: 'translate',
    description: 'Translates texts using Google Translate API.',
    //devOnly: Boolean,
    //testOnly: Boolean,
    //deleted: true,
    options: [
        {
            name: 'message',
            description: 'The message you want to translate.',
            type: ApplicationCommandOptionType.String,
            required: true,
        },
        {
            name: 'language',
            description: 'The language that you want to translate your text into.',
            type: ApplicationCommandOptionType.String,
            required: true,
            choices: [
                { name: 'Chinese', value: 'cn'},
                { name: 'English', value: 'en'},
                { name: 'French', value: 'fr'},
                { name: 'Italian', value: 'it'},
                { name: 'Japanese', value: 'ja'},
                { name: 'Latin', value: 'la'},
                { name: 'Portuguese', value: 'pt'},
                { name: 'Russian', value: 'ru'},
                { name: 'Spanish', value: 'es'}
            ],
        },
        ],
        permissionsRequired: [PermissionFlagsBits.UseApplicationCommands],
        botPermissions: [PermissionFlagsBits.UseApplicationCommands],

    callback: async (client, interaction) => {
        const textInput = interaction.options.getString('message');
        const languageInput = interaction.options.getString('language');

        await interaction.reply({ content: "Translating your text...", ephemeral: true });

        const translatedText = await translate(textInput, { to: `${languageInput}` });

        try {
            const embed = new EmbedBuilder()
            .setTitle("Translation")
            .setThumbnail("https://i.imgur.com/zhNQNG8.png")
            .setColor(0xF285B5)
            .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL({ dynamic: true }) })
            .setDescription("Check your translation below:")
            .addFields({ name: 'Original Text', value: `\`\`\`${textInput}\`\`\``, inline: false })
            .addFields({ name: 'Translated Text', value: `\`\`\`${translatedText.text}\`\`\``, inline: false })
            .setFooter({ text: "Text Translated Successfully!"})
            .setTimestamp();

            await interaction.editReply({ content: '', embeds: [embed], ephemeral: true });

        } catch (error) {
            console.log(`There was an error when Building the Translation embed: ${error}`);
        }
    }
};