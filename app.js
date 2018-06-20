//const wat het zelfde moet blijven.
const Discord       = require('discord.js')       ;
const ytdl          = require('ytdl-core')        ;
const Botset        = require('./botset.json')    ;
const fs            = require('fs')               ;
const Enmap         = require('enmap')            ;
//const ddiff         = require('return-deep-diff') ;
//const chalk         = require('chalk')            ;
const client        = new Discord.Client()        ;
const streamOption  = {seek: 0, volume: 1}        ;
const token         = Botset.token                ;
const prefix        = Botset.Prefix               ;

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file =>{
    const event     = require(`./events/${file}`) ;
    let eventName   = file.split(".")[0]          ;
    client.on(eventName, event.bind(null, client));
  });
});

client.commands    = new Discord.Collection()     ;
//client.aliases     = new Enmap()     ;

fs.readdir("./command/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return            ;
    const props    = require(`./command/${file}`);
    client.commands.set(props.help.name, props);
    //props.conf.aliases.forEach(alias => {
    //  client.aliases.set(alias, props.help.name);
    //});
  });
});

client.login(token);
