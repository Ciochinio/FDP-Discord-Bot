const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ip')
        .setDescription('Ip serwera WitcherCraft Survival'),
    async execute(interaction, client){
        const message = await interaction.deferReply({
            fetchReply: true
        });

        const newMessage = `Ja pierdole. Po chuj Ci to ip? Wystarczy pobrać launcher (/launcher)`
        await interaction.editReply({
            content:newMessage
        });
    }
}