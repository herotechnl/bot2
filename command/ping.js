exports.run = (client, message, args) => {
  message.channel.send("pong :ping_pong:");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliase: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'ping/pong',
  usage: 'ping'
};
