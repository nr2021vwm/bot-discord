const { MessageEmbed } = require('discord.js');
const prefix = process.env.prefix;

module.exports = client => {

client.on('message', async message => {
 if (message.author.id === client.user.id || message.author.bot) return;
 if (!message.content.startsWith(prefix)) return;
 const args = message.content.slice(prefix.length).trim().split(/ +/g);
 const command = args.shift().toLowerCase();


 // message.member.roles.add( RoleID )
 if (command === "member") {
  message.member.roles.add('000000000000000000')
   const embed = new MessageEmbed()
   .setColor('GREEN')
   .setTitle('Member roles')
   .setDescription('**Member** roleを**付与**しました。')
   .setTimestamp()

 message.channel.send(embed)
 }

 if (command === "r_member") {
  message.member.roles.add('000000000000000000')
   const embed = new MessageEmbed()
   .setColor('RED')
   .setTitle('Remove Member roles')
   .setDescription('**Member** roleを**削除**しました。')
   .setTimestamp()

 message.channel.send(embed)
 }

 if (command === "admin") {
  message.member.roles.add('000000000000000000')
   const embed = new MessageEmbed()
   .setColor('GREEN')
   .setTitle('Admin roles')
   .setDescription('**Admin** roleを**付与**しました。')
   .setTimestamp()

 message.channel.send(embed)
 }

 if (command === "r_admin")
  message.member.roles.add('000000000000000000')
   const embed = new MessageEmbed()
   .setColor('RED')
   .setTitle('Remove Admin roles')
   .setDescription('**Admin** roleを**削除**しました。')

 message.channel.send(embed)
 });

};