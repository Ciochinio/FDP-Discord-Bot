const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('launcher')
        .setDescription('Launcher do łatwego wchodzenia na WitcherCrafta'),
    async execute(interaction, client){
        const message = await interaction.deferReply({
            fetchReply: true
        });

        const newMessage = `Launcher do prostego i szybkiego wchodzenia na serwery Witchercrafta: https://redboltmedia.net/download/witchercraft-installer.exe. Polcam pobrać i nie martwić się instalowaniem modów, czy javy. Launcher zrobi wszystko za Ciebie. (Do jego używania potrzebny jest Minecraft permium).`
        await interaction.editReply({
            content:newMessage
        });
    }
}