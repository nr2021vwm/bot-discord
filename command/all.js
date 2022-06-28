const { MessageEmbed } = require('discord.js');
const prefix = process.env.prefix;

module.exports = client => {

client.on("message", async message => {
if (!message.content.startsWith(prefix)) return;
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
   
if (command === "link") {
 const invite = await message.channel.createInvite({maxAge: 10000})
 const embed = new MessageEmbed()
  .setColor('BLUE')
  .setTitle('new Create server Invite Link!!!')
  .setDescription('Link Timeout`3 hours`')
  .setTimestamp()
 const time = await message.channel.send(invite, embed)
 await time.delete({ timeout: 50000 })
}

if (command === "code_creator"){
 const embed = new MessageEmbed()
  .setColor('GREEN')
  .setTitle('code creator')
  .setDescription('This code was created by Twitter @_nagipoyo.')
  .setTimestamp()

 message.channel.send(embed)
}

  })
};