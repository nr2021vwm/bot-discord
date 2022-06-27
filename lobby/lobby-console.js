const { MessageEmbed } = require('discord.js');
const channelId = process.env.console;

module.exports = client => {

client.on('guildMemberAdd', async member => {
 const channel = member.guild.channels.cache.get(channelId)
 const embed = new MessageEmbed()
 .setColor('GREEN')
 .setTitle('new Join Member')
 .setDescription(`${member.displayname}\nID ${member.id}`)

 channel.send(embed)
})

client.on('guildMemberRemove', async member => {
 const channel = member.guild.channels.cache.get(channelId)
 const embed = new MessageEmbed()
 .setColor('RED')
 .setTitle('Member left the server')
 .setDescription(`${member.displayname}, <@${member.id}> left\nID ${member.id}`)
})

};