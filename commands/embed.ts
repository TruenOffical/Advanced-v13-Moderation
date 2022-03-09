import { Guild, MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category:'Testing',
    description:'Send A Simple Embed',
    permissions: ['ADMINISTRATOR'],
    slash:'both',
    testOnly:true,

    callback: async ({message , text}) => {
        let guild = message.guild
        const embed = new MessageEmbed()
         .setDescription('Hello World!')
         .setTitle('Title')
         .setColor('RED')
         .setTimestamp()
         .addFields([{
             name:'Name One',
             value:'Value One',
             inline:true
         },
        {
            name:'Name Two',
            value:'Value Two',
            inline:true
        }
        ])
        const newMessage = await message.reply({
            embeds:[embed]
        });
        await new Promise(resolve => setTimeout(resolve,5000))
        const newEmbed = newMessage.embeds[0]
        newEmbed.setTitle('Edited Title')

        newMessage.edit({
            embeds:[newEmbed]
        })
    }
} as ICommand