const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    const Embed = new Discord.MessageEmbed()
    .setColor('#10eee2')
    .setTitle("Emoji - embed")
    .setDescription("Voici un emoji très sympatique")
    .addField("Il est bg", "<:jepleure:884009894808780860>")
    .addField("Il est mouvementé", "<a:jerigole:884009805872775228>")
    .setTimestamp();

    message.channel.send(Embed);

}

module.exports.config = {
    name: 'emojiembed'
}