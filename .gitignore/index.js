const Discord = require('discord.js')
const bot = new Discord.Client()
const Emoji = require('./commandes/emoji')
const Ping = require('./commandes/ping')
var chaine
var position
var mot


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
		message.member.addRole('430849971462602753')
  .then(console.log)
  .catch(console.error);
	}
	else if (message.content === '&is')
	{
		message.member.addRole('344169978540457997')
  .then(console.log)
  .catch(console.error);
	}
	
	if (message.content === '&gvg')
	{
		let guild = bot.guilds.find('id', '280821033966239754'),
		canal = guild.channels.find('id', '443804252981297152'),
		mid = guild.members.find('id', '256160275156303872');

		canal.send(mid + ' ' + message.member.displayName + ' est volontaire pour la gvg de la semaine prochaine')
	}
	
	// Dial Ywi / Eli
	
	chaine = message.content
	mot = 'Ywiel'
	position = chaine.search(mot)
	
	if (position!=-1 & message.member.id === '255031973133680640')
	{
		message.channel.send('Vous m\'avez appelée, Créatrice ?')
	}
	
	chaine = message.content
	mot = 'Ywiël'
	position = chaine.search(mot)
	
	if (position!=-1 & message.member.id === '255031973133680640')
	{
		message.channel.send('Vous m\'avez appelée, Créatrice ?')
	}
	
	// PARTIE IMAGES CANCER SOSO 181855904709345280 + HAWK 174915471718612992
	
	
	// SOSO
	
	chaine = message.content
	mot = 'NANI'
	position = chaine.search(mot)
	
	if (position!=-1 & message.member.id === '181855904709345280')
	{
		message.channel.send
		({
		file : './images/NANI.png'
		})
	}
	
	chaine = message.content
	mot = 'OMEGALUL'
	position = chaine.search(mot)
	
	if (position!=-1 & message.member.id === '181855904709345280')
	{
		message.channel.send
		({
		file : './images/OMEGALUL.png'
		})
	}
	
	chaine = message.content
	mot = 'LUUUL'
	position = chaine.search(mot)
	
	if (position!=-1 & message.member.id === '181855904709345280')
	{
		message.channel.send
		({
		file : './images/LUUUL.png'
		})
	}
	
	// 3 Seriously
	
	chaine = message.content
	mot = 'SERIOUSLY'
	position = chaine.search(mot)
	
	if (position!=-1 & message.member.id === '181855904709345280')
	{
		message.channel.send
		({
		file : './images/SERIOUSLY.png'
		})
	}
	
		chaine = message.content
	mot = 'Seriously'
	position = chaine.search(mot)
	
	if (position!=-1 & message.member.id === '181855904709345280')
	{
		message.channel.send
		({
		file : './images/Seriously.png'
		})
	}
	
		chaine = message.content
	mot = 'seriously'
	position = chaine.search(mot)
	
	if (position!=-1 & message.member.id === '181855904709345280')
	{
		message.channel.send
		({
		file : './images/seriously.png'
		})
	}
	
		chaine = message.content
	mot = 'Bob Ross'
	position = chaine.search(mot)
	
	if (position!=-1 & message.member.id === '181855904709345280')
	{
		message.channel.send
		({
		file : './images/BobRoss.png'
		})
	}
	
		chaine = message.content
	mot = 'en SUEUR'
	position = chaine.search(mot)
	
	if (position!=-1 & message.member.id === '181855904709345280')
	{
		message.channel.send
		({
		file : './images/enSUEUR.png'
		})
	}
	
		chaine = message.content
	mot = 'TRY HARD'
	position = chaine.search(mot)
	
	if (position!=-1 & message.member.id === '181855904709345280')
	{
		message.channel.send
		({
		file : './images/Tryhard.png'
		})
	}
	
		chaine = message.content
	mot = 'Salted'
	position = chaine.search(mot)
	
	if (position!=-1 & message.member.id === '181855904709345280')
	{
		message.channel.send
		({
		file : './images/Salt.png'
		})
	}
	
		chaine = message.content
	mot = 'salted'
	position = chaine.search(mot)
	
	if (position!=-1 & message.member.id === '181855904709345280')
	{
		message.channel.send
		({
		file : './images/Salt.png'
		})
	}
	
		chaine = message.content
	mot = 'SALTED'
	position = chaine.search(mot)
	
	if (position!=-1 & message.member.id === '181855904709345280')
	{
		message.channel.send
		({
		file : './images/Salt.png'
		})
	}
	
	
		chaine = message.content
	mot = 'DAGA KOTOWARU'
	position = chaine.search(mot)
	
	if (position!=-1 & message.member.id === '181855904709345280')
	{
		message.channel.send
		({
		file : './images/Dagakotowaru.png'
		})
	}
	
		chaine = message.content
	mot = 'KONO DIO DA'
	position = chaine.search(mot)
	
	if (position!=-1 & message.member.id === '181855904709345280')
	{
		message.channel.send
		({
		file : './images/Dio.png'
		})
	}
	
	// HAWK
	
	chaine = message.content
	mot = 'JOHN'
	position = chaine.search(mot)
	
	if (position!=-1 & message.member.id === '174915471718612992')
	{
		message.channel.send
		({
		file : './images/JohnCena.png'
		})
	}
	
	chaine = message.content
	mot = 'CENA'
	position = chaine.search(mot)
	
	if (position!=-1 & message.member.id === '174915471718612992')
	{
		message.channel.send
		({
		file : './images/JohnCena.png'
		})
	}
	
	chaine = message.content
	mot = 'John'
	position = chaine.search(mot)
	
	if (position!=-1 & message.member.id === '174915471718612992')
	{
		message.channel.send
		({
		file : './images/JohnCena.png'
		})
	}
	
	chaine = message.content
	mot = 'Cena'
	position = chaine.search(mot)
	
	if (position!=-1 & message.member.id === '174915471718612992')
	{
		message.channel.send
		({
		file : './images/JohnCena.png'
		})
	}
	
	
})

bot.on("guildMemberAdd", (member) => {
  let guild = bot.guilds.find('id', '280821033966239754'),
      canal = guild.channels.find('id', '443804468824506378'),
      note = guild.channels.find('id', '443804685841989632');

      canal.send('Bienvenue ' + member.user + ` ! Si tu es un membre de la guilde sur summoners war, je t\'invite \u00e0 rentrer la commande &sw dans le channel ` + note + ` afin que je t\'attribue ton r\u00f4le. Si tu as \u00e9t\u00e9 invit\u00e9 ici pour jouer \u00e0 un jeu tout en \u00e9tant en vocal avec l\'un de nos membres, merci d\'entrer la commande &is toujours dans le channel ` + note + `. Et surtout, enjoy ! :) `)
});


bot.login(process.env.KEY)
