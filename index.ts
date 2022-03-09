import DiscordJS, { Intents } from 'discord.js'
import dotenv from 'dotenv'
import WOKCommands from 'wokcommands'
import path from 'path'
dotenv.config()

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on('ready' , async() => {
    console.log(`Developed By IX Media \n ${client.user?.tag} Adlı Bot Başarıyla Giriş Yaptı`)

    new WOKCommands(client , {
        commandsDir: path.join(__dirname , 'commands'),
        typeScript:true,
        testServers:["949040954164252732"]
    })
})
// client.on('messageCreate' , (message) => {
//     if(message.content === 'ping'){
//         message.reply({
//             content:'Pong!'
//         })
//     }
// })


// client.on('ready', () => {
//     console.log(`Developed By IX Media \n ${client.user?.tag} Adlı Bot Başarıyla Aktif Edildi`)
//     //Guild
//     const guildId = "949040954164252732";
//     const guild = client.guilds.cache.get(guildId);
//     let commands;

//     if(guild){
//         commands = guild.commands
//     } else {
//         commands = client.application?.commands
//     }
//     commands?.create({
//         name:"ping",
//         description:"Pong olarak reply atar"
//     })
//     commands?.create({
//         name:"add",
//         description:"adds two numbers",
//         options: [
//             {
//                 name:"num1",
//                 description:"The first number",
//                 required: true,
//                 type:DiscordJS.Constants.ApplicationCommandOptionTypes.NUMBER
//             },
//             {
//                 name:"num2",
//                 description:"The second number",
//                 required: true,
//                 type:DiscordJS.Constants.ApplicationCommandOptionTypes.NUMBER
//             }
//         ]
//     })
//     //Global
// })
// client.on("interactionCreate", async (interaction) => {
//     if(!interaction.isCommand()){
//         return;
//     }
//     const {commandName , options} = interaction;

//     if(commandName === "ping"){
//         interaction.reply({
//             content:'Pong',
//             ephemeral: true
//         })
//     }
// })

client.login(process.env.TOKEN)