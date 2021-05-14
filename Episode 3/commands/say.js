const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('Vous n\'avez pas la permission d\'executer cette commande !')
    const SayMessage = args.join(" ");
    if(message.author.bot) return
    message.delete()
    message.channel.send(SayMessage)
}

module.exports.config = {
    name: 'say'
}