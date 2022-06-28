const { MessageEmbed } = require('discord.js');
const channelId =process.env.vcl;

module.exports = client => {

client.on('voiceStateUpdate', (oldState, newState) => {
 if(newState && oldState) {

 channel = client.channels.cache.get(channelId)
if(oldState.channelID===null && newState.channelID != null){
    
 const embed = new MessageEmbed()
 .setColor('GREEN')
 .setTitle('Voice channel Join')
 .setDescription(`<@${newState.id}> が <#${newState.channelID}> に入室しました。`)
 .setTimestamp()

 channel.send(embed)
    } 

if(oldState.channelId !=null && newState.channelID === null){

 const embed = new MessageEmbed()
 .setColor('RED')
 .setTitle('Voice channel Left')
 .setDescription(`<@${oldState}> が <#${oldState.channelID}> から退室しました。`)
 .setTimestamp()

 channel.send(embed)
    }

   }
 })

};