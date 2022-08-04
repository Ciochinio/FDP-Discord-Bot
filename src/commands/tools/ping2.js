const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping2')
        .setDescription('pong skurwysynie'),
    async execute(interaction, client){
        const message = await interaction.deferReply({
            fetchReply: true
        });

        const newMessage = `szmata za szmatą i nie tykam przścieradła   https://tenor.com/view/dante-dmc-gif-gif-21908025`
        await interaction.editReply({
            content:newMessage
        });
    }
}