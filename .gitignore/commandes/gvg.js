module.exports = class Ping 
{

	static match(message) 
	{
	
		return message.content.startsWith('&gvg')
	}
	
	static action (message)
	{
		let guild = message.guilds.find('id', '315219678064541698'),
		canal = guild.channels.find('id', '443396151043948564');

		canal.send(message.member.displayName + ' est volontaire pour la gvg de la semaine prochaine')
	}

}

