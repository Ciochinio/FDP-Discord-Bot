const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('launcher')
        .setDescription('Launcher do łatwego wchodzenia na WitcherCrafta'),
    async execute(interaction, client){
        const message = await interaction.deferReply({
            fetchReply: true
        });

        const newMessage = `https://redboltmedia.net/download/witchercraft-installer.exe`
        await interaction.editReply({
            content:newMessage
        });
    }
}