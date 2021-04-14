const Discord = require('discord.js');
const client = new Discord.Client
const config = require('./config.json')
const prefix = config.prefix
const fs = require('fs')

client.commands = new Discord.Collection();

fs.readdir('./commands/', (err, files ) => {
    if(err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === 'js');
    if(jsfile.length <= 0) {
        console.log('Aucune commande a été trouvée dans le HANDLER !')
    }

    jsfile.forEach((f, i) => {
        let props =require(`./commands/${f}`);
        console.log(`HANDLER: ${f} a été detecter !`)
        client.commands.set(props.config.name, props)
    })
})

client.on("message", async message => {
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);

    let commandFile = client.commands.get(command.slice(prefix.length))
    if(commandFile) commandFile.run(client, message, args)
})

client.on("ready", async () => {
    console.log('Le bot est co sur Discord !')
    let statuses = [
        `Je suis sur ${client.guilds.cache.size} serveur !`,
        'Like la vidéo D\'Esqualy'
    ]
    
    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        client.user.setActivity(status, {type: "STREAMING"})
    }, 5000)
})
client.login(config.token)