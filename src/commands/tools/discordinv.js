const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('discord')
        .setDescription('Discord RedBoltMedia'),
    async execute(interaction, client){
        const message = await interaction.deferReply({
            fetchReply: true
        });

        const newMessage = `Zapraszam serdecznie na discord RedBoltMedia: https://discord.gg/xReJfktHS2 `
        await interaction.editReply({
            content:newMessage
        });
    }
}