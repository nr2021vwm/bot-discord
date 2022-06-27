const { MessageEmbed } = require('discord.js');
const channelId = process.env.lobby;

module.exports = client => {
 
client.on('guildMemberRemove', async member => {
 const channel = member.guild.channels.cache.get(channelId)
 
 const embed = new MessageEmbed()
 .setColor('RED')
 .setTitle(`${member.displayName} has left`)
 .setDescription(`${member.displayName} が **${member.guild.name}** から **退出** しました`)
 .setFooter(`${member.guild.name}`)
 .setTimestamp()

 channel.send(embed)
 })
};