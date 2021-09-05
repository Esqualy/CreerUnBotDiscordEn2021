const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    const Embed = new Discord.MessageEmbed()
    .setColor('#10eee2')
    .setTitle("Je suis le titre de test")
    .setDescription("Je suis une description")
    .addField("Je suis un Field", "Trop fort !")
    .setTimestamp();

    message.channel.send(Embed);

}

module.exports.config = {
    name: 'test'
}