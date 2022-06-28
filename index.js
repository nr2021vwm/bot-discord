const discord = require('discord.js');
require('dotenv').config();
const client = new discord.Client;

 // general folder
const help = require('./command/general/help');
const all = require('./command/general/all');

 // role folder
const member = require('./command/role/roles');

 // lobby folder
const join = require('./lobby/join');
const left = require('./lobby/left');
const ls = require('./lobby/lobby-console');

client.on("ready", message => {
    console.log(`${client.user.tag} token login now`);
 client.user.setPresence({
    status: process.env.status ,
    activity: {
        name: process.env.activity,
        type: process.env.acttype
    }
 });

help(client)
all(client)
member(client)

join(client)
left(client)
ls(client)
});

client.login(process.env.token);