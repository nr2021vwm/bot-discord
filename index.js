const discord = require('discord.js');
require('dotenv').config();
const client = new discord.Client;

 // command folder
const help = require('./command/help');
const all = require('./command/all');

 // lobby folder
const join = require('./lobby/join');
const left = require('./lobby/left');

client.on("ready", message => {
    console.log("discord-bot login");
 client.user.setPresence({
    status: 'idel',
    activity: {
        name: process.env.activity,
        type: process.env.acttype
    }
 });

help(client)
all(client)

join(client)
left(client)
});

client.login(process.env.token);