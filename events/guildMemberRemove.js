module.exports  = (guild, member) => {
  const Channel = member.guild.channels.get("269179377189781504")
  if(!Channel) return console.log('kan kannaal niet vinden!')
  Channel.send(`Please say goodbye to ${member.user.username} we will miss you!`);
};
