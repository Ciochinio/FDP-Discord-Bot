const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('mody')
        .setDescription('Lista modów na serwerze WitcherCraft Survival'),
    async execute(interaction, client){
        const message = await interaction.deferReply({
            fetchReply: true
        });

        const newMessage = `Mody? Jakie kurwa mody. /launcher ziomek`
        await interaction.editReply({
            content:newMessage
        });
    }
}