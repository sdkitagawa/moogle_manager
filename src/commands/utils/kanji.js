/**
 * @author Douglas Kitagawa (sdkitagawa, dkitagawa)
 * @file kanji.js
 * @param {Client} client
 * @param {Interaction} interaction
 */
const {
    EmbedBuilder,
    ApplicationCommandOptionType,
    PermissionFlagsBits
} = require('discord.js');

module.exports = {
    name: 'kanji',
    description: 'Explains what is Kanji.',
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
                title: "História do Kanji",
                description: "**Hai**! Vamos a explicação sobre o Kanji! <:moogleclock:1266552078722007231>\n\nO __Kanji__ é o terceiro e último sistema de escrita do japonês que aprendemos.\n\nEle é formado por mais de __4000__ letras ao todo, e é por esse motivo que este se torna o nosso último objetivo quando se trata do aprendizado do japonês.\n\n__**A História dos Kanji**__\n\nOs __Kanji__ são caracteres da língua japonesa que foram herdados a partir de caracteres chineses, da época da Dinastia Han, que se utilizam para escrever japonês junto com os caracteres silabários japoneses __Hiragana__ e __Katakana__.\n\nHá algumas discordâncias sobre como os caracteres chineses chegaram ao Japão, mas é geralmente aceito que monges Budistas, ao voltar para o Japão, trouxeram consigo textos chineses por volta do século V.\nEsses textos estavam na língua chinesa, e num primeiro momento teriam sido lidos como tal.\n\nCom o passar do tempo, porém, um sistema conhecido como kanbun (漢文) foi desenvolvido; ele essencialmente usava sinais diacríticos nos textos chineses para possibilitar aos falantes do Japonês lê-los de acordo com as regras da gramática Japonesa.\n\nA língua Japonesa não possuía uma forma escrita naquele tempo. Surgiu um sistema de escrita chamado __Man’yogana__ que usava um limitado número de caracteres chineses baseados em sua pronúncia, ao invés de seu significado.\n\n__Man’yõgana__ escrito em estilo curvilíneo se tornou o primeiro __Hiragana__, um sistema de escrita que era acessível às mulheres (que na época não recebiam educação superior). O silabário __Katakana__ emergiu por um caminho paralelo, os estudantes do monastério simplificaram __man’yõgana__ a um único elemento constituinte. Desta forma os dois outros sistemas de escrita, __Hiragana__ e __Katakana__, referidos coletivamente como “**Kana**”, são, na verdade, provenientes de __Kanjis__.",
                footer: "Explicação de o que é Kanji"
            },
            en_us: {
                title: "Story of Kanji",
                description: "**Hai**! Let\'s talk about Kanji! <:moogleclock:1266552078722007231>\n\n__Kanji__ is the third and final Japanese writing system we need to learn.\n\nIt\'s made up of more than __4000__ letters in all, which is why it becomes our last goal when it comes to learning Japanese.\n\n__**The History of Kanji**__\n\n__Kanji__ are characters from the Japanese language that were inherited from chinese characters, from the Han Dynasty, that are used to write Japanese along with the Japanese syllabary characters __Hiragana__ and __Katakana__.\n\nThere\'re some disagreements about how the chinese characters arrived in Japan, but it\'s generally accepted that Buddhist monks, upon returning to Japan, brought Chinese texts with them around the century V.\nThese texts were in the chinese language, and at first they would have been read as such.\n\nOver time, however, a system known as kanbun (漢文) was developed; he essentially used diacritical signs in Chinese texts to enable Japanese speakers to read them according to the rules of Japanese grammar.\n\nThe Japanese language didn\'t have a written form at that time. A writing system called __Many\'ogana__ emerged that used a limited number of chinese characters based on its pronunciation, instead of its meaning.\n\n__Man\'yõgana__ written in curvilinear style became the first version of __Hiragana__, a writing system that was accessible to people. Women (who didn\'t receive higher education at the time). The __Katakana__ syllabary emerged on a parallel path: monastery students simplified man\'yõgana to a single constituent element. In this way the two other writing systems, __Hiragana__ and __Katakana__, collectively referred to as “**Kana**”, are actually from Kanji.",
                footer: "Explanation of what it is Kanji"
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
            .setTimestamp();

            await interaction.reply({ embeds: [embed] });
        } catch (error) {
            console.error(`There was an error when Building the embed: ${error}`);
            await interaction.reply("An error occurred while processing your request.");
        }
    }
};
