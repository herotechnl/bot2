const Botset        = require('../botset.json')    ;

const prefix        = Botset.Prefix               ;

module.exports      = (client, message) => {
  if(message.author.bot) return;
  if(message.content.indexOf(prefix)) return;
  const args        = message.content.slice(prefix.length).trim().split(/ +/g);
  const command     = args.shift().toLowerCase();
  const cmd         = client.commands.get(command);
  if(!cmd) return;
  cmd.run(client, message, args);
};
