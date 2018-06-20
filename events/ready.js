module.exports =  async (client)  => {
    console.log('scd is online');
    client.user.setActivity("scders pesten")

    try {
      let link = await client.generateInvite(["ADMINISTRATOR"]);
      console.log(link);
    } catch(e){
      console.log(e.stack);
}};
