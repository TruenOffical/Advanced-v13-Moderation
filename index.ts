import DiscordJS, { Intents } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on('messageCreate' , (message) => {
    if(message.content === 'ping'){
        message.reply({
            content:'Pong!'
        })
    }
})

client.on('ready', () => {
    console.log(`Developed By IX Media \n ${client.user?.tag} Adlı Bot Başarıyla Aktif Edildi`)
})

client.login(process.env.TOKEN)