const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('witchercraft')
        .setDescription('WitcherCraft Mod'),
    async execute(interaction, client){
        const message = await interaction.deferReply({
            fetchReply: true
        });

        const newMessage = `https://www.curseforge.com/minecraft/mc-mods/witcher-craft`
        await interaction.editReply({
            content:newMessage
        });
    }
}