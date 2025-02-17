/**
 * @author Douglas Kitagawa (sdkitagawa, dkitagawa)
 * @file hiragana.js
 * @param {Client} client
 * @param {Interaction} interaction
 */
const {
    EmbedBuilder,
    ApplicationCommandOptionType,
    PermissionFlagsBits
} = require('discord.js');

module.exports = {
    name: 'hiragana',
    description: 'Tells the story of Hiragana.',
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
                title: "História do Hiragana",
                description: "**Hai**! Vamos a explicação sobre o Hiragana! <:moogleclock:1266552078722007231>\n\nO __Hiragana__ é um sistema de escrita (um silabário) formado por 46 **Kanas** (símbolos) e mais 33 **Kanas** das contrações.\n\nCada letra representa um som! Aprender o __Hiragana__ é o seu primeiro passo para aprender japonês. Após aprendê-lo, muita coisa começará a fazer mais sentido na língua.\n\n__**A História do Hiragana**__\n\nA história do __Hiragana__ começa no período Heian (平安) que durou do ano 794 D.C até o ano 1185 D.C.\n\nHistoricamente o __Hiragana__ teve sua origem baseada na versão cursiva dos __Kanji__. As principais criadoras do atual __Hiragana__ foram as princesas de familias reais japonesa, as quais escreviam seus diários de viagem (旅行日記 ryokounikki) e do seu dia a dia (日常日記 nichijounikki), que mais tarde foram transformados em livros, os quais podemos citar como exemplos o 更級日記 (sarashinanikki) e o 紫式部日記 (murasakishikibunikki).",
                footer: "Explicação de o que é Hiragana"
            },
            en_us: {
                title: "Story of Hiragana",
                description: "**Hai**! Let\'s talk about Hiragana! <:moogleclock:1266552078722007231>\n\nHiragana is a writing system (a syllabary) formed by 46 **Kanas** (symbols) and 33 **Kanas** of the contractions that was created by the princesses of the royal Japanese families.\n\nEach letter represents a sound! Learning __Hiragana__ is your first step in learning Japanese. After learning it, a lot of things will start to make more sense in the language.\n\n__**The History of Hiragana**__\n\nThe history of __Hiragana__ begins in the Heian (平安) period which lasted from 794 A.D to the year 1185 A.D\n\nHistorically __Hiragana__ had it\'s origin based on the cursive version of the __Kanji__. The main creators of the current __Hiragana__ were the princesses of royal Japanese families, who wrote their travel diaries (旅行日記 ryokounikki) and their day-to-day (日常日記 nichijounikki), which were later turned into books, which we can quote as examples 更級日記 (sarashinanikki) and 紫式部日記 (murasakishikibunikki).",
                footer: "Explanation of what Hiragana is"
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
