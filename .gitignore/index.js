const Discord = require('discord.js')
const bot = new Discord.Client()
const Emoji = require('./commandes/emoji')
const Ping = require('./commandes/ping')
var chaine
var position
var autrepos
var mot
var pasla


bot.on('ready', function () 
{
	bot.user.setActivity('Preparing your commands').catch(console.error)
})


bot.on('message', function (message) 
{
	if(Ping.match(message))
	{
		return Ping.action(message)
	}
	
	if(Emoji.match(message)) 
	{
		return Emoji.action(message)
	}
})
	

	
	// Dialogues
	
	
	
	// Dial Ywi / Eli
	
	chaine = message.content
	mot = 'Ywiel'
	pasla = 'Je t\'aime'
	position = chaine.search(mot)
	autrepos = chaine.search(pasla)
	
	if (position!=-1 & message.member.id === '255031973133680640' & autrepos===-1)
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
	
	chaine = message.content
	mot = 'Je t\'aime Ywiel'
	position = chaine.search(mot)
	
	if (position!=-1 & message.member.id === '255031973133680640')
	{
		message.channel.send('Moi aussi Créatrice ♥')
	}
	
	
	
	// PARTIE IMAGES CANCER SOSO 181855904709345280 + HAWK 174915471718612992
	
	// MOI
	
	chaine = message.content
	mot = ':°'
	position = chaine.search(mot)
	
	if (position!=-1 & message.member.id === '255031973133680640')
	{
		message.channel.send
		({
		file : './images/siffle.png'
		})
	}
	
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



bot.login('NDQzMDc0NDkwMjkzODEzMjU4.DdSbnA.OzzZmOcd-KDxrCZImw2ffRFlsps')
