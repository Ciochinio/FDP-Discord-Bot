const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('status')
        .setDescription('Shows bot uptime status'),
    async execute(interaction, client){
        const message = await interaction.deferReply({
            fetchReply: true
        });

        const newMessage = `https://stats.uptimerobot.com/q5Rl2f1YKB`
        await interaction.editReply({
            content:newMessage
        });
    }
}