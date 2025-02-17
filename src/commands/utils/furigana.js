/**
 * @author Douglas Kitagawa (sdkitagawa, dkitagawa)
 * @file furigana.js
 * @param {Client} client
 * @param {Interaction} interaction
 */
const {
    EmbedBuilder,
    ApplicationCommandOptionType,
    PermissionFlagsBits
} = require('discord.js');

module.exports = {
    name: 'furigana',
    description: 'Explains what Furigana is.',
    //devOnly: Boolean,
    //testOnly: Boolean,
    //deleted: true,
    options: [
        {
            name: 'language',
            description: 'Select the language you want the message to be displayed.',
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

        const embedContent = {
            pt_br: {
                title: "O que é Furigana",
                description: "*Saa! Hajimemashou!* <:moogleinfo:1266552179750207630> \n\n**Furigana** é o nome dado a quando os **Kanas** (símbolos) do __Hiragana__ são usados para representar a leitura e o som de uma palavra em __Kanji__. Ou seja, se você souber ler o __Hiragana__, você conseguirá ler revistas, livros, jornais e mangás em japonês que possuam o __Furigana__.\n\nVamos usar como exemplo o __Kanji__ da palavra \"carta\", que é este: 信\nEste mesmo __Kanji__ pode ser representado por outros **Kanas** (símbolos) em __Hiragana__\n\nLogo esse __Kanji__\n\n信\n\nÉ igual estes __Hiraganas__\n\nしん",
                footer: "Explicação de o que é Furigana"
            },
            en_us: {
                title: "What is Furigana",
                description: "*Saa! Hajimemashou!* <:moogleinfo:1266552179750207630> \n\n**Furigana** is the name given when the __Hiragana__ **Kanas** (ideograms) are used to represent the reading and sound of a word in __Kanji__. That\'s, if you can read __Hiragana__, you\'ll be    able to read Japanese magazines, books, newspapers and manga that have __Furigana__.   \n\nLet\'s use as an example the __Kanji__ of the word \"Japan\", which is this: 日本\nThis same __Kanji__ can be represented by other **Kanas** (ideograms) in __Hiragana__.\n\nSo these two __Kanjis__:\n\n日本\n\nAre the same as these **Hiragana**:\n\nに　ほん",
                footer: "Explanation of what Furigana is"
            }
        }

        const languageChoice = interaction.options.getString('language') || 'en_us';
        const content = embedContent[languageChoice] || embedContent['en_us'];

        try {
            const embed = new EmbedBuilder()
            .setTitle(content.title)
            .setThumbnail("https://i.imgur.com/zhNQNG8.png")
            .setColor(0xF285B5)
            .setDescription(content.description)
            .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL({dynamic: true }) })
            .setFooter({ text: content.footer })
            .setImage("https://i.imgur.com/yoHzd9l.png")
            .setTimestamp();

            await interaction.reply({ embeds: [embed] });
        } catch (error) {
            console.error(`There was an error when Building the embed: ${error}`);
            await interaction.reply("An error occurred while processing your request.");
        }
    }
};
