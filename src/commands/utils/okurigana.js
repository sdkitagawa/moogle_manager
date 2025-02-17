/**
 * @author Douglas Kitagawa (sdkitagawa, dkitagawa)
 * @file okurigana.js
 * @param {Client} client
 * @param {Interaction} interaction
 */
const {
    EmbedBuilder,
    ApplicationCommandOptionType,
    PermissionFlagsBits
} = require('discord.js');

module.exports = {
    name: 'okurigana',
    description: 'Explains what Okurigana is.',
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
                title: "O que é Okurigana",
                description: "**Hai hai chotto matte kudasai!** <:moogleinfo:1266552179750207630>\n\nA palavra __Okurigana__ significa literalmente \"letras acompanhantes\", eles são **Kanas** (símbolos) que seguem o __Kanji__ na escrita de palavras japonesas. Geralmente o __Okurigana__ é usado para flexionar um adjetivo ou verbo, indicando o tempo do verbo (passado, presente ou futuro), dando um significado afirmativo ou negativo.\nVejamos abaixo como ele funciona: \n\nUsaremos como exemplo o verbo \"mimasu\" (みます) que significa \"ver\".\n\nObserve a frase a seguir: \n\nテレビを __**見**__ ます (*Terebi wo mimasu*), que significa: *Ver TV*\n\nNa frase acima, temos um __Kanji__, o __Kanji__ de **Mi** (見), e este Kanji é equivalente ao **Kana** (símbolo) み do __Hiragana__\nO __Okurigana__ dessa frase em questão são os **Kanas** (símbolos) ま (**ma**) e o す (**su**), essa parte em __Hiragana__ da palavra é o __Okurigana__.\n\nAo flexionar um verbo para outro tempo verbal, vai ser justamente a parte em __Hiragana__ que iremos alterar, e esse passará a ser o nosso __Okurigana__.\n\nPor exemplo, na frase テレビを __**見**__ ました (*Terebi wo mimashita*) que significa: *Vi TV*\nO __Okurigana__ se encontra no *mashita* (ました), pois, essa foi a parte flexionada no verbo para que o verbo fosse passado do **PRESENTE** para o **PASSADO**.",
                footer: "Explicação de o que é Okurigana"
            },
            en_us: {
                title: "What is Okurigana",
                description: "**Hai hai chotto matte kudasai!** <:moogleinfo:1266552179750207630>\n\nThe word __Okurigana__ literally means \"accompanying letters\", they\'re **Kanas** (ideograms) that follow __Kanji__ in the writing of Japanese words. Usually __Okurigana__ is used to inflect an adjective or verb, indicating the verb tense (past, present or future), giving an affirmative or negative meaning.\nLet\'s see below how it works: \n\nWe\'ll use as an example the verb \"mimasu\" (みます) which means \"to see\".\n\nNote the following sentence: \n\nテレビを __**見**__ ます (*Terebi wo mimasu*), which means: *Watch TV*\n\nIn the above sentence, we have a __Kanji__, the __Kanji__ of **Mi** (見), and this __Kanji__ is equivalent to the **Kana** (*ideogram*) み of __Hiragana__\nThe __Okurigana__ of this sentence are the kanas (*ideograms*) ま (**ma**) and す (**su**), that part in __Hiragana__ of the word is the __Okurigana__.\n\nWhen flexing a verb to another tense, it\'ll be precisely the part in __Hiragana__ that we\'ll change, and this will become our __Okurigana__.\n\nFor example, in the phrase テレビを __**見**__ ました (*Terebi wo mimashita*) which means: *Watched TV*\nThe __Okurigana__ is found in *mashita* (ました), therefore, this it was the inflected part of the verb so that the verb was passed from **PRESENT** to **PAST**.",
                footer: "Explanation of what Okurigana is"
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
            .setImage("https://i.imgur.com/r6khENx.png")
            .setTimestamp();

            await interaction.reply({ embeds: [embed] });
        } catch (error) {
            console.error(`There was an error when Building the embed: ${error}`);
            await interaction.reply("An error occurred while processing your request.");
        }
    }
};
