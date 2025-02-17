/**
 * @author Douglas Kitagawa (sdkitagawa, dkitagawa)
 * @file katakana-table.js
 * @param {Client} client
 * @param {Interaction} interaction
 */
const {
    EmbedBuilder,
    ApplicationCommandOptionType,
    PermissionFlagsBits
} = require('discord.js');

module.exports = {
    name: 'katakana-table',
    description: 'Shows the entire Katakana Table.',
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
                title: "Tabela do Katakana",
                description: `**Wakatta**! Está é a tabela do Higana! <:mooglebow:1266552023835348992> \n\n
                    **A:** ア　イ　ウ　エ　オ\n\n
                    **Ka:** カ　キ　ク　ケ　コ\n\n
                    **Sa:** サ　シ　ス　セ　ソ\n\n
                    **Ta:** タ　チ　ツ　テ　ト\n\n
                    **Na:** ナ　ニ　ヌ　ネ　ノ\n\n
                    **Ha:** ハ　ヒ　フ　ヘ　ホ\n\n
                    **Ma:** マ　ミ　ム　メ　モ\n\n
                    **Ya:** ヤ　ユ　ヨ\n\n
                    **Ra:** ラ　リ　ル　レ　ロ\n\n
                    **Wa:** ワ　ヲ\n\n
                    **N:** ン\n\n
                    **Ga:** ガ　ギ　グ　ゲ　ゴ\n\n
                    **Za:** ザ　ジ　ズ　ゼ　ゾ\n\n
                    **Da:** ダ　ヂ　ヅ　デ　ド\n\n
                    **Ba:** バ　ビ　ブ　ベ　ボ\n\n
                    **Pa:** パ　ピ　プ　ペ　ポ\n\n
                    **K:** キャ　キュ　キョ\n\n
                    **G:** ギャ　ギュ　ギョ\n\n
                    **S:** シャ　シュ　ショ\n\n
                    **J:** ジャ　ジュ　ジョ\n\n
                    **C:** チャ　チュ　チョ\n\n
                    **N:** ニャ　ニュ　ニョ\n\n
                    **H:** ヒャ　ヒュ　ヒョ\n\n
                    **B:** ビャ　ブｙ　ビョ\n\n
                    **P:** ピャ ピュ ピョ\n\n
                    **M:** ミャ　ミュ　ミョ\n\n
                    **R:** リャ　リュ　リョ\n\n
                    **V:** ヴァ　ヴィ　ヴ　ヴェ　ヴォ\n\n
                    **F:** ファ　フィ　フュ　フェ　フォ\n\n
                    **Wi:** ウィ\n\n
                    **We:** ウェ`,
                footer: "Tabela Katakana"
            },
            en_us: {
                title: "Katakana Table",
                description: `**Wakatta**! This is the Katakana Table! <:mooglebow:1266552023835348992> \n\n
                    **A:** ア　イ　ウ　エ　オ\n\n
                    **Ka:** カ　キ　ク　ケ　コ\n\n
                    **Sa:** サ　シ　ス　セ　ソ\n\n
                    **Ta:** タ　チ　ツ　テ　ト\n\n
                    **Na:** ナ　ニ　ヌ　ネ　ノ\n\n
                    **Ha:** ハ　ヒ　フ　ヘ　ホ\n\n
                    **Ma:** マ　ミ　ム　メ　モ\n\n
                    **Ya:** ヤ　ユ　ヨ\n\n
                    **Ra:** ラ　リ　ル　レ　ロ\n\n
                    **Wa:** ワ　ヲ\n\n
                    **N:** ン\n\n
                    **Ga:** ガ　ギ　グ　ゲ　ゴ\n\n
                    **Za:** ザ　ジ　ズ　ゼ　ゾ\n\n
                    **Da:** ダ　ヂ　ヅ　デ　ド\n\n
                    **Ba:** バ　ビ　ブ　ベ　ボ\n\n
                    **Pa:** パ　ピ　プ　ペ　ポ\n\n
                    **K:** キャ　キュ　キョ\n\n
                    **G:** ギャ　ギュ　ギョ\n\n
                    **S:** シャ　シュ　ショ\n\n
                    **J:** ジャ　ジュ　ジョ\n\n
                    **C:** チャ　チュ　チョ\n\n
                    **N:** ニャ　ニュ　ニョ\n\n
                    **H:** ヒャ　ヒュ　ヒョ\n\n
                    **B:** ビャ　ブｙ　ビョ\n\n
                    **P:** ピャ ピュ ピョ\n\n
                    **M:** ミャ　ミュ　ミョ\n\n
                    **R:** リャ　リュ　リョ\n\n
                    **V:** ヴァ　ヴィ　ヴ　ヴェ　ヴォ\n\n
                    **F:** ファ　フィ　フュ　フェ　フォ\n\n
                    **Wi:** ウィ\n\n
                    **We:** ウェ`,
                footer: "Katakana Table"
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
            .setImage("https://i.imgur.com/HtgVkUT.png")
            .setTimestamp();

            await interaction.reply({ embeds: [embed] });
        } catch (error) {
            console.error(`There was an error when Building the embed: ${error}`);
            await interaction.reply("An error occurred while processing your request.");
        }
    }
};
