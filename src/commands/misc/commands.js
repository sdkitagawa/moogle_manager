/**
 * @author Douglas Kitagawa (sdkitagawa, dkitagawa)
 * @file commands.js
 * @param {Client} client
 * @param {Interaction} interaction
 */
const {
    EmbedBuilder,
    ApplicationCommandOptionType,
    PermissionFlagsBits
} = require('discord.js');

module.exports = {
    name: 'commands',
    description: 'Shows all the Moogle Manager commands.',
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
        const sampleUser = "<@1221986587399815198>"

        const embedContent = {
            pt_br: {
                title: "Comandos do Bot",
                description: `### É necessário usar uma \`/\` antes do nome do comando
                \n\n### Comandos Administrativos
                \n## \`Ban\`\n\n
                **Descrição**: Bane um membro no servidor.
                \n## \`Echo\`\n\n
                **Descrição**: Envie uma mensagem por meio do bot.
                \n## \`Embed-Creator\`\n\n
                **Descrição**: Cria uma mensagem embutida dentro de um quadro (embed).
                \n## \`Field-Embed\`\n\n
                **Descrição**: Cria uma mensagem embutida dentro de um quadro (embed) com campos e valores para os campos
                \n## \`Kick\`\n\n
                **Descrição**: Expulsa um membro do servidor.
                \n## \`Timeout\`\n\n
                **Descrição**: Silencia um membro do servidor.
                \n\n### Comandos Gerais
                \n## \`Commands\`\n\n
                **Descrição**: Mostra e explica como usar todos os comandos do Moogle Manager.
                \n## \`Developer\`\n\n
                **Descrição**: Mostra informações sobre o desenvolvedor do Moogle Manager.
                \n## \`Ping\`\n\n
                **Descrição**: Verifica o ping atual do seu cliente Discord e o ping do Websocket do Discord.
                \n## \`Server-Info\`\n\n
                **Descrição**: Fornece informações sobre a Guilda (Servidor).
                \n\n### Comandos de Utilidade Pública
                \n## \`Calculator\`\n\n
                **Descrição**: Abre a interface de uma calculadora.
                \n## \`Furigana\`\n\n
                **Descrição**: Explica o que é Furigana.
                \n## \`Hiragana-Table\`\n\n
                **Descrição**: Mostra toda a tabela Hiragana.
                \n## \`Hiragana\`\n\n
                **Descrição**: Conta a história do Hiragana.
                \n## \`Kanji\`\n\n
                **Descrição**: Explica o que é Kanji.
                \n## \`Katakana-Table\`\n\n
                **Descrição**: Mostra toda a tabela Katakana.
                \n## \`Katakana\`\n\n
                **Descrição**: Conta a história do Katakana.
                \n## \`Okurigana\`\n\n
                **Descrição**: Explica o que é Okurigana.
                \n## \`Translate\`\n\n
                **Descrição**: Traduz textos usando a API do Google Translate.`,
                footer: "Comandos Moogle Manager",
            },
            en_us: {
                title: "Bot Commands",
                description: `### You must use a \`/\` before the command name
                \n\n### Administrative commands
                \n## \`Ban\`\n\n
                **Description**: Bans a member of the server.
                \n## \`Echo\`\n\n
                **Description**: Sends a message through the bot.
                \n## \`Embed-Creator\`\n\n
                **Description**: Creates a custom embed.
                \n## \`Field-Embed\`\n\n
                **Description**: Creates a custom embed with fields and values.
                \n## \`Kick\`\n\n
                **Description**: Kicks a member of the server.
                \n## \`Timeout\`\n\n
                **Description**: Mutes a member of the server.
                \n\n### Miscellaneous Commands
                \n## \`Commands\`\n\n
                **Description**: Shows and explains how to use all the Moogle Manager commands.
                \n## \`Developer\`\n\n
                **Description**: Shows information about the Moogle Manager Developer.
                \n## \`Ping\`\n\n
                **Description**: Checks the current ping of your Discord Client and Discord.\'s Websocket ping.
                \n## \`Server-Info\`\n\n
                **Description**: Provides information about the Guild (Server).
                \n\n### Utility Commands
                \n## \`Calculator\`\n\n
                **Description**: Brings up an interface of a calculator.
                \n## \`Furigana\`\n\n
                **Description**: Explains what Furigana is.
                \n## \`Hiragana-Table\`\n\n
                **Description**: Shows the entire Hiragana Table.
                \n## \`Hiragana\`\n\n
                **Description**: Tells the story of Hiragana.
                \n## \`Kanji\`\n\n
                **Description**: Explains what is Kanji.
                \n## \`Katakana-Table\`\n\n
                **Description**: Shows the entire Katakana Table.
                \n## \`Katakana\`\n\n
                **Description**: Tells the story of Katakana.
                \n## \`Okurigana\`\n\n
                **Description**: Explains what Okurigana is.
                \n## \`Translate\`\n\n
                **Description**: Translates texts using Google Translate API.`,
                footer: "Moogle Manager commands",
            }
        };

        const languageChoice = interaction.options.getString('language') || 'en_us';
        const content = embedContent[languageChoice] || embedContent['en_us'];

        try {
            const embed = new EmbedBuilder()
                .setTitle(content.title)
                .setThumbnail("https://i.imgur.com/zhNQNG8.png")
                .setColor(0xF285B5)
                .setDescription(content.description)
                .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL({ dynamic: true }) })
                .setFooter({ text: content.footer })
                .setTimestamp();

            await interaction.reply({ embeds: [embed] });
        } catch (error) {
            console.error(`Error building the embed: ${error}`);
            await interaction.reply("An error occurred while processing your request.");
        }
    }
};
