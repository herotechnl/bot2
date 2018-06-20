module.exports  = (guild, member) => {
  const Channel = member.guild.channels.get("269179377189781504")
  if(!Channel) return console.log('kan kannaal niet vinden!')
  Channel.send(`${member.user.username} was just banned of scd!`);
};
