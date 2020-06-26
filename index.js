const Discord = require('discord.js')
const bot = new Discord.Client()
const webhooknitroverifs = new Discord.WebhookClient('725329129037103135' , 'Jq_NcyS17uExGLFy6pfv0UaLoFzN-Ari9-uCAC0WLbr5RXukyotwlsXywLFZxrtoK_r7')

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
	webhooknitroverifs.send('Bonjours')
    }

})

bot.login(process.env.TOKEN)