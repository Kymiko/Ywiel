module.exports = class Emoji 
{

	static match(message) 
	{
	
		return message.content.startsWith('&e')
	}
	
	static action (message)
	{
		let args = message.content.split(' ')
		args.shift()
		message.channel.send
		({
		file : args.join('') + '.png'
		})
		
	}

}

