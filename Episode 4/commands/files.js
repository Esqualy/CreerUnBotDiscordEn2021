const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    message.channel.send({
        files: [
            "./ressources/ping.js",
            "./ressources/test.js"
               ]
    })
}
module.exports.config = {
    name: 'files'
}