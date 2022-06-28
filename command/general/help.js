const { MessageEmbed } = require('discord.js');
const prefix = process.env.prefix;

module.exports = client => {

client.on("message", async message => {
if (message.author.id == client.user.id || message.author.bot) return;
if (!message.content.startsWith(prefix)) return;
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();

if (command === "help") {

 const embed = new MessageEmbed()
 .setColor('BLUE')
 .setTitle('Help Commands')
 .setDescription("コマンドのはじめに `"+ prefix +"` をつける必要があります。")
 .addField('command 1', 'text 1')
 .addField('command 2', 'text 2')
 .setTimestamp()

 message.channel.send(embed)
}


 })
};