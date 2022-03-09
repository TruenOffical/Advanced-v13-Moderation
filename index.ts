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
    //Guild
    const guildId = "949040954164252732";
    const guild = client.guilds.cache.get(guildId);
    let commands;

    if(guild){
        commands = guild.commands
    } else {
        commands = client.application?.commands
    }
    commands?.create({
        name:"ping",
        description:"Pong olarak reply atar"
    })
    //Global
})
client.on("interactionCreate", async (interaction) => {
    if(!interaction.isCommand()){
        return;
    }
    const {commandName , options} = interaction;

    if(commandName === "ping"){
        interaction.reply({
            content:'Pong',
            ephemeral: true
        })
    }
})

client.login(process.env.TOKEN)