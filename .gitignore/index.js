const Discord = require('discord.js')
const bot = new Discord.Client()
const Emoji = require('./commandes/emoji')
const Ping = require('./commandes/ping')

bot.on('ready', function () {
	bot.user.setActivity('Summoners War Guildmanage').catch(console.error)
})


bot.on('message', function (message) {
	if(Ping.match(message)) {
		return Ping.action(message)
	}
	
	if(Emoji.match(message)) {
		return Emoji.action(message)
	}
	
	if (message.content === '&sw')
	{
		message.member.addRole('443391321261080586')
  .then(console.log)
  .catch(console.error);
	}
	else if (message.content === '&is')
	{
		message.member.addRole('443391370707730432')
  .then(console.log)
  .catch(console.error);
	}
	
	if (message.content === '&gvg')
	{
		let guild = bot.guilds.find('id', '315219678064541698'),
		canal = guild.channels.find('id', '443396151043948564');

		canal.send(message.member.displayName + ' est volontaire pour la gvg de la semaine prochaine')
	}
})

bot.on("guildMemberAdd", (member) => {
  let guild = bot.guilds.find('id', '315219678064541698'),
      canal = guild.channels.find('id', '443331931484979210');

      canal.send('Bienvenue ' + member.user + ` ! Si tu es un membre de la guilde sur summoners war, je t\'invite \u00e0 rentrer la commande &sw dans le channel #` + canal.id + ` afin que je t\'attribue ton r\u00f4le. Si tu as \u00e9t\u00e9 invit\u00e9 ici pour jouer \u00e0 un jeu tout en \u00e9tant en vocal avec l\'un de nos membres, merci d\'entrer la commande &is toujours dans le channel #` + canal.name + `. Et surtout, enjoy ! :) `)
});


bot.login(process.env.KEY)
