const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('bot')
        .setDescription('Info o bocie'),
    async execute(interaction, client){
        const message = await interaction.deferReply({
            fetchReply: true
        });

        const newMessage = `Jakby ktoś chciał jakieś komendy dodatkowe albo zmiane nazwy/ikonki bota to zapraszam do składania propocyzji`
        await interaction.editReply({
            content:newMessage
        });
    }
}