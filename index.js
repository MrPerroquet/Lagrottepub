const Discord = require('discord.js')
const bot = new Discord.Client()

//instance
bot.on('ready', function () {
	bot.user.setActivity('g!help', { type: 'PLAYING' })
})

bot.on('message', function (message) {
	if (message.content === 'g!help') {
		message.channel.send('Voici les commandes : g!serverinfo')
		console.log("g!help")
	}

if (message.content === 'g!serverinfo') {
	let server_name = message.guild.name
	let server_size = message.guild.members.server_size
	message.channel.send('Server : ' + server_name + '\nMembres : ' + server_size)
    }

    if (message.content === 'Salut') {
    	message.channel.send('Hey')
		
	if (message.content === 'g!pute') {
		message.channel.send('Ok tu es banni <Ban:718455295298240514>')
	}
	
    }
})

bot.login('process.env.TOKEN')
