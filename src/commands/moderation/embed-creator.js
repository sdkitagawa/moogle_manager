/**
 * @author Douglas Kitagawa (sdkitagawa, dkitagawa)
 * @file embed-creator.js
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

module.exports = {
    name: 'embed-creator',
    description: 'Creates a custom embed.【Administration Command】',
    //devOnly: Boolean,
    //testOnly: Boolean,
    //deleted: true,
    options: [
        {
            name: 'channel',
            description: 'The channel where the embed is going to be sent in.',
            type: ApplicationCommandOptionType.Channel,
            required: true,
        },
        {
            name: 'title',
            description: 'The title of the embed (required).',
            type: ApplicationCommandOptionType.String,
            required: true,
        },
        {
            name: 'description',
            description: 'The description of the embed (required).',
            type: ApplicationCommandOptionType.String,
            required: true,
        },
        {
            name: 'color',
            description: 'Use a six digit Hexadecimal code for the embed color (optional).',
            length: 6,
            type: ApplicationCommandOptionType.String,
            required: false,
        },
        {
            name: 'image',
            description: 'The image of the embed (optional).',
            type: ApplicationCommandOptionType.String,
            required: false,
        },
        {
            name: 'thumbnail',
            description: 'The thumbnail of the embed (optional).',
            type: ApplicationCommandOptionType.String,
            required: false,
        },
        {
            name: 'footer',
            description: 'The footer value of the embed (optional).',
            type: ApplicationCommandOptionType.String,
            required: false,
        },
    ],
    permissionsRequired: [PermissionFlagsBits.Administrator],
    botPermissions: [PermissionFlagsBits.Administrator],

    callback: async (client, interaction) => {

        const embedOptions = {
            channel: interaction.options.getChannel('channel'),
            title: interaction.options.getString('title'),
            description: interaction.options.getString('description'),
            color: interaction.options.getString('color') || 'F285B5',
            image: interaction.options.getString('image'),
            thumbnail: interaction.options.getString('thumbnail'),
            footer: interaction.options.getString('footer') || 'Moogle Management Company',
        };

        const {
            channel: chosenChannel,
            title: embedTitle,
            description: embedDescription,
            color: embedColor,
            image: embedImage,
            thumbnail: embedThumbnail,
            footer: embedFooter
        } = embedOptions;

        if (embedImage) {
            if (!embedImage.startsWith("http")) return await interaction.reply({ content: "You cannot make this your image.", ephemeral: true })
        }

        if (embedThumbnail) {
            if (!embedThumbnail.startsWith("http")) return await interaction.reply({ content: "You cannot make this your thumbnail.", ephemeral: true })
        }

        const embed = new EmbedBuilder()
        .setTitle(embedTitle)
        .setThumbnail(embedThumbnail)
        .setColor(parseInt(`0x${embedColor}`))
        .setDescription(embedDescription)
        .setImage(embedImage)
        .setFooter({ text: `${embedFooter}`, iconURL: interaction.member.displayAvatarURL({ dynamic: true }) })


        await interaction.reply({ content: `Your embed has been sent in ${chosenChannel}!`, ephemeral: true })

        try {
            await interaction.channel.send({ embeds: [embed] })
        } catch (error) {
            console.log(`There was an error when Sending the message: ${error}`);
        }
    },
};
