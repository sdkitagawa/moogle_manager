/**
 * @author Douglas Kitagawa (sdkitagawa, dkitagawa)
 * @file developer.js
 * @param {Client} client
 * @param {Interaction} interaction
 */
const {
    EmbedBuilder,
    ApplicationCommandOptionType,
    PermissionFlagsBits
} = require('discord.js');

module.exports = {
    name: 'developer',
    description: 'Shows information about the Moogle Manager Developer.',
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
        const botDeveloper = "<@737103505663328356>";

        const embedContent = {
            pt_br: {
                title: "O Desenvolvedor",
                description: `**Kupo**! ♫ ~* <:mooglemediamoogle:1266552438245036102> \n\nO nome de usuário do Discord do meu criador é **${botDeveloper}**.\n\nO mesmo também é o desenvolvedor oficial dos Sistemas de Gerenciamento Moogle!\n\n**Você pode saber mais sobre o meu mestre em**:\n\n- ⚡ [LinkedIn](https://linkedin.com/in/douglas-kitagawa/)\n- 📫 **E-mail**: **douglaskitagawa@proton.me**\n- 👨🏻‍💻 [Github](https://github.com/sdkitagawa)\n- 📺 [Youtube](https://www.youtube.com/@dkitagawa)\n- 📺 [Twitch](https://www.twitch.tv/kitbitdots)\n\n# Spoiler\n\n||O meu mestre gosta de desenvolver jogos, ama estruturas de dados, algoritmos, ouvir musica, jogar, produzir musica, dançar, estudar, ensinar e atuar como engenheiro de áudio.\n\n⭐ Programa majoritariamente em Python, JavaScript, C++, C#, Lua e Assembly!\n\n❓As franquias de jogos favoritos dele são **The Legend of Zelda**, **Final Fantasy**, **Dark Souls**, **Resident Evil**, **Pokemon**.||`,
                footer: "Nos bastidores",
            },
            en_us: {
                title: "The Developer",
                description: `**Kupo**! ♫ ~* <:mooglemediamoogle:1266552438245036102> \n\nThe Discord username of my creator is **${botDeveloper}**.\n\nThey are also the official developer of Moogle Management Systems!\n\n**You can check more about my master at**:\n\n- ⚡ [LinkedIn](https://linkedin.com/in/douglas-kitagawa/)\n- 📫 **E-mail**: **douglaskitagawa@proton.me**\n- 👨🏻‍💻 [Github](https://github.com/sdkitagawa)\n- 📺 [Youtube](https://www.youtube.com/@dkitagawa)\n- 📺 [Twitch](https://www.twitch.tv/kitbitdots)\n\n# Spoiler\n\n||My master enjoys developing games, loves data structures, algorithms, listening to music, playing games, producing music, dancing, studying, teaching, and working as an audio engineer.\n\n⭐ They develop mostly in Python, JavaScript, C++, C#, Lua, and Assembly!\n\n❓Their favorite game franchises are **The Legend of Zelda**, **Final Fantasy**, **Dark Souls**, **Resident Evil**, **Pokemon**.||`,
                footer: "Behind the scenes",
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
