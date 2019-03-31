const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("561942160543318030")
setInterval(function() {
channel.send(`3bkergrgrws23`);
}, 30)
})

client.login(process.env.BOT_TOKEN);