module.exports  = (guild, member) => {
  const Channel = member.guild.channels.get("269179377189781504")
  if(!Channel) return console.log('kan kannaal niet vinden!')
  Channel.send(`welcome ${member.user.username} to scd! look around on the server. do you have questions? ask our staff.`);
};
