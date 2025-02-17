/**
 * @author Douglas Kitagawa (sdkitagawa, dkitagawa)
 * @file hiragana-table.js
 * @param {Client} client
 * @param {Interaction} interaction
 */
const {
    EmbedBuilder,
    ApplicationCommandOptionType,
    PermissionFlagsBits
} = require('discord.js');

module.exports = {
    name: 'hiragana-table',
    description: 'Shows the entire Hiragana Table.',
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
                title: "Tabela do Hiragana",
                description: `**Wakatta**! Esta é a tabela do Hiragana! <:mooglebow:1266552023835348992> \n\n
                    **A:**　あ　い　う　え　お\n\n
                    **Ka:**　か　き　く　け　こ\n\n
                    **Sa:**　さ　し　す　せ　そ\n\n
                    **Ta:**　た　ち　つ　て　と\n\n
                    **Na:**　な　に　ぬ　ね　の\n\n
                    **Ha:**　は　ひ　ふ　へ　ほ\n\n
                    **Ma:**　ま　み　む　め　も\n\n
                    **Ya:**　や　ゆ　よ\n\n
                    **Ra:**　ら　り　る　れ　ろ\n\n
                    **Wa:**　わ　を\n\n
                    **N**: ん\n\n
                    **Ga:**　が　ぎ　ぐ　げ　ご\n\n
                    **Za:**　ざ　じ　ず　ぜ　ぞ\n\n
                    **Da:**　だ　ぢ　づ　で　ど\n\n
                    **Ba:**　ば　び　ぶ　べ　ぼ\n\n
                    **Pa:**　ぱ　ぴ　ぷ　ぺ　ぽ\n\n
                    **K:**　きゃ　きゅ　きょ\n\n
                    **G:**　ぎゃ　ぎゅ　ぎょ\n\n
                    **S:**　しゃ　しゅ　しょ\n\n
                    **J:**　じゃ　じゅ　じょ\n\n
                    **C:**　ちゃ　ちゅ　ちょ\n\n
                    **N:**　にゃ　にゅ　にょ\n\n
                    **H:**　ひゃ　ひゅ　ひょ\n\n
                    **B:**　びゃ　びゅ　びょ\n\n
                    **P:**　ぴゃ　ぴゅ　ぴょ\n\n
                    **M:**　みゃ　みゅ　みょ\n\n
                    **R:**　りゃ　りゅ　りょ`,
                footer: "Tabela Hiragana"
            },
            en_us: {
                title: "Hiragana Table",
                description: `**Wakatta**! This is the Hiragana Table! <:mooglebow:1266552023835348992> \n\n
                    **A:**　あ　い　う　え　お\n\n
                    **Ka:**　か　き　く　け　こ\n\n
                    **Sa:**　さ　し　す　せ　そ\n\n
                    **Ta:**　た　ち　つ　て　と\n\n
                    **Na:**　な　に　ぬ　ね　の\n\n
                    **Ha:**　は　ひ　ふ　へ　ほ\n\n
                    **Ma:**　ま　み　む　め　も\n\n
                    **Ya:**　や　ゆ　よ\n\n
                    **Ra:**　ら　り　る　れ　ろ\n\n
                    **Wa:**　わ　を\n\n
                    **N**: ん\n\n
                    **Ga:**　が　ぎ　ぐ　げ　ご\n\n
                    **Za:**　ざ　じ　ず　ぜ　ぞ\n\n
                    **Da:**　だ　ぢ　づ　で　ど\n\n
                    **Ba:**　ば　び　ぶ　べ　ぼ\n\n
                    **Pa:**　ぱ　ぴ　ぷ　ぺ　ぽ\n\n
                    **K:**　きゃ　きゅ　きょ\n\n
                    **G:**　ぎゃ　ぎゅ　ぎょ\n\n
                    **S:**　しゃ　しゅ　しょ\n\n
                    **J:**　じゃ　じゅ　じょ\n\n
                    **C:**　ちゃ　ちゅ　ちょ\n\n
                    **N:**　にゃ　にゅ　にょ\n\n
                    **H:**　ひゃ　ひゅ　ひょ\n\n
                    **B:**　びゃ　びゅ　びょ\n\n
                    **P:**　ぴゃ　ぴゅ　ぴょ\n\n
                    **M:**　みゃ　みゅ　みょ\n\n
                    **R:**　りゃ　りゅ　りょ`,
                footer: "Hiragana Table"
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
            .setImage("https://i.imgur.com/1z2FPni.png")
            .setTimestamp();

            await interaction.reply({ embeds: [embed] });
        } catch (error) {
            console.error(`There was an error when Building the embed: ${error}`);
            await interaction.reply("An error occurred while processing your request.");
        }
    }
};
