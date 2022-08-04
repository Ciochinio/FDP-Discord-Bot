const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('dmc')
        .setDescription('Devil May Cry Weapons Reborn Mod'),
    async execute(interaction, client){
        const message = await interaction.deferReply({
            fetchReply: true
        });

        const newMessage = `https://www.curseforge.com/minecraft/mc-mods/devil-may-cry-weapons-reborn`
        await interaction.editReply({
            content:newMessage
        });
    }
}