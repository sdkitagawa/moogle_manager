/**
 * @author Douglas Kitagawa (sdkitagawa, dkitagawa)
 * @file calculator.js
 * @param {Client} client
 * @param {Interaction} interaction
 */
const {
    EmbedBuilder,
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    PermissionFlagsBits
} = require('discord.js');
const math = require('mathjs');

module.exports = {
    name: 'calculator',
    description: 'Brings up an interface of a calculator.',
    //devOnly: Boolean,
    //testOnly: Boolean,
    //deleted: true,
    permissionsRequired: [PermissionFlagsBits.SendMessages],
    botPermissions: [PermissionFlagsBits.SendMessages],

    callback: async (client, interaction) => {
        const buttonPrefix = "calculator";

        const embed = new EmbedBuilder()
        .setColor(0x727272)
        .setDescription("```\nResults will be displayed here\n```")

        const firstRow = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
            .setLabel("AC")
            .setCustomId(buttonPrefix + "_clear")
            .setStyle(ButtonStyle.Danger),

            new ButtonBuilder()
            .setLabel("(")
            .setCustomId(buttonPrefix + "_(")
            .setStyle(ButtonStyle.Primary),

            new ButtonBuilder()
            .setLabel(")")
            .setCustomId(buttonPrefix + "_)")
            .setStyle(ButtonStyle.Primary),

            new ButtonBuilder()
            .setLabel("<=")
            .setCustomId(buttonPrefix + "_backspace")
            .setStyle(ButtonStyle.Primary),
        )

        const secondRow = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
            .setLabel("1")
            .setCustomId(buttonPrefix + "_1")
            .setStyle(ButtonStyle.Secondary),

            new ButtonBuilder()
            .setLabel("2")
            .setCustomId(buttonPrefix + "_2")
            .setStyle(ButtonStyle.Secondary),

            new ButtonBuilder()
            .setLabel("3")
            .setCustomId(buttonPrefix + "_3")
            .setStyle(ButtonStyle.Secondary),

            new ButtonBuilder()
            .setLabel("/")
            .setCustomId(buttonPrefix + "_/")
            .setStyle(ButtonStyle.Primary),
        )

        const thirdRow = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
            .setLabel("4")
            .setCustomId(buttonPrefix + "_4")
            .setStyle(ButtonStyle.Secondary),

            new ButtonBuilder()
            .setLabel("5")
            .setCustomId(buttonPrefix + "_5")
            .setStyle(ButtonStyle.Secondary),

            new ButtonBuilder()
            .setLabel("6")
            .setCustomId(buttonPrefix + "_6")
            .setStyle(ButtonStyle.Secondary),

            new ButtonBuilder()
            .setLabel("*")
            .setCustomId(buttonPrefix + "_*")
            .setStyle(ButtonStyle.Primary),
        )

        const fourthRow = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
            .setLabel("7")
            .setCustomId(buttonPrefix + "_7")
            .setStyle(ButtonStyle.Secondary),

            new ButtonBuilder()
            .setLabel("8")
            .setCustomId(buttonPrefix + "_8")
            .setStyle(ButtonStyle.Secondary),

            new ButtonBuilder()
            .setLabel("9")
            .setCustomId(buttonPrefix + "_9")
            .setStyle(ButtonStyle.Secondary),

            new ButtonBuilder()
            .setLabel("-")
            .setCustomId(buttonPrefix + "_-")
            .setStyle(ButtonStyle.Primary),
        )

        const fifthRow = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
            .setLabel("0")
            .setCustomId(buttonPrefix + "_0")
            .setStyle(ButtonStyle.Secondary),

            new ButtonBuilder()
            .setLabel(".")
            .setCustomId(buttonPrefix + "_.")
            .setStyle(ButtonStyle.Secondary),

            new ButtonBuilder()
            .setLabel("=")
            .setCustomId(buttonPrefix + "_=")
            .setStyle(ButtonStyle.Success),

            new ButtonBuilder()
            .setLabel("+")
            .setCustomId(buttonPrefix + "_+")
            .setStyle(ButtonStyle.Primary)

        )

        const userMessage = await interaction.reply({ embeds: [embed], components: [firstRow, secondRow, thirdRow, fourthRow, fifthRow], ephemeral: false });

        let data = "";
        const collector = userMessage.createMessageComponentCollector({
            filter: i => i.user.id === interaction.user.id,
            time: 600000,
        })

        collector.on("collect", async i => {

            const buttonId = i.customId;
            const characterValue = buttonId.split('_')[1];
            let extra = "";

            if (characterValue === "=") {
                try {
                    data = math.evaluate(data).toString();
                } catch(error) {
                    data = "";
                    extra = "An error occurred, please click on the AC to restart."
                }
            } else if (characterValue === "clear") {
                data = "";
                extra = "Results will be displayed here"
            } else if (characterValue === "backspace") {
                data = data.slice(0, -1);
            } else {
                const lastCharacter = data[data.length -1];

                data += `${(
                    (parseInt(characterValue) == characterValue || characterValue === ".")
                    &&
                    (lastCharacter == parseInt(lastCharacter) || lastCharacter === "."))
                    ||
                    data.length === 0 ? "" : " "}` + characterValue;
            }

            i.update({ 
            embeds: [
                new EmbedBuilder()
                .setColor(0x727272)
                .setDescription(`\`\`\`\n${data || extra}\n\`\`\``)
            ],
            components: [
                firstRow, secondRow, thirdRow, fourthRow, fifthRow
            ],
            ephemeral: false
            })
        })

    }
};
