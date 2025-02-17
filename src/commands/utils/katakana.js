/**
 * @author Douglas Kitagawa (sdkitagawa, dkitagawa)
 * @file katakana.js
 * @param {Client} client
 * @param {Interaction} interaction
 */
const {
    EmbedBuilder,
    ApplicationCommandOptionType,
    PermissionFlagsBits
} = require('discord.js');

module.exports = {
    name: 'katakana',
    description: 'Tells the story of Katakana.',
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
                title: "História do Katakana",
                description: "**Hai**! Vamos a explicação sobre o Katakana! <:moogleclock:1266552078722007231>\n\nO __Katakana__ é um sistema de escrita (um silabário) formado por 46 **Kanas** (símbolos) e mais 33 **Kanas** das contrações, exatamente como o __Hiragana__.\n\n__**A História do Katakana**__\n\nA história do __Katakana__ começa no período Heian (平安) que durou do ano 794 D.C até o ano 1185 D.C.\n\nNesse período, a literatura clássica chinesa estava no auge entre os nobres japoneses. Nessa época, apenas os homens instruídos tinham acesso à leitura dos ideogramas, os __Kanji__.\n\nO __Katakana__ surgiu por volta do século IX, quando os monges budistas criaram um silabário derivado dos caracteres chineses para simplificar a sua leitura. A origem do alfabeto é atribuído ao monge **Kūkai** o **Kōbō-Daishi**, que o desenvolveu com a finalidade de simbolizar os sons do __Kanji__ de modo rápido e fácil.\n\nO __Katakana__ é usado para escrever nomes comuns e próprios de origem estrangeira, principalmente ocidental, onomatopeias, palavras técnicas, gírias e nomes científicos de plantas e animais. As onomatopeias escritas em __Katakana__ estão muito presentes na língua japonesa. Nos quadrinhos japoneses, os mangás, elas são frequentemente usadas para representar o som da chuva, palmas, socos.",
                footer: "Explicação de o que é Katakana"
            },
            en_us: {
                title: "Story of Katakana",
                description: "**Hai**! Let’s explain the Katakana! <:moogleclock:1266552078722007231>\n\n__Katakana__ is a writing system (a syllabary) formed by 46 **Kanas** (symbols) and 33 **Kanas** of contractions, just like __Hiragana__.\n\n__**The History of Katakana**__\n\nThe history of __Katakana__ begins in the Heian period (平安) which lasted from 794 A.D to 1185 A.D.\n\nIn that period, classical chinese literature was at its peak between the Japanese nobles. At that time, only educated men had access to reading the ideograms, the __Kanji__.\n\n__Katakana__ appeared around the 9th century, when Buddhist monks created a syllabary derived from chinese characters to simplify their reading. The origin of the alphabet is attributed to the monk **Kūkai** or **Kōbō-Daishi**, who developed it in order to symbolize the sounds of __Kanji__ quickly and easily.\n\n__Katakana__ is used to write common and proper names of foreign origin, mainly western, onomatopoeia, technical words, slang and scientific names of plants and animals. Onomatopoeia written in __Katakana__ is very present in the Japanese language. In Japanese comics, the manga, they are often used to represent the sound of rain, clapping, punching.",
                footer: "Explanation of what Katakana is"
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
