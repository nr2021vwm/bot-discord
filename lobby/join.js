const { MessageEmbed } = require('discord.js');
const channelId = process.env.lobby;

module.exports = client => {

client.on('guildMemberAdd', async member => {
 const channel = member.guild.channels.cache.get(channelId)
 const embed = new MessageEmbed()
 .setColor('GREEN')
 .setTitle(`welcome to the **${member.guild.name}** server!`)
 .setDescription(`**${member.displayName}** has joined\nID ${member.id}`)

 channel.send(embed)
})

client.on('guildMemberAdd', async member => {
 const channel = member.guild.channels.cache.get(channelId)
 const embed = new MessageEmbed()
 .setColor('GREEN')
 .addField('rule 1', 'text 1')
 .addField('rule 2', 'text 2')
 .setFooter(`${member.guild.name}`)
 .setTimestamp()

 channel.send(embed)
})

client.on('guildMemberAdd', async menubar => {
 const channel = member.guild.channels.cache.get(channelId)
 const mention = `<@${member.id}>`

 channel.send(mention)
})

};