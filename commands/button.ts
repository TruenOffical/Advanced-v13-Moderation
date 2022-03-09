import { Message, MessageActionRow, MessageButton } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category:'Testing',
    description:'Testing Buttons',
    testOnly:true,
    slash:true,

    callback: async ({interaction: msgInt , channel}) => {
        const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
            .setCustomId('ban_yes')
            .setEmoji('')
            .setLabel('Banla')
            .setStyle('DANGER')
        )
        .addComponents(
            new MessageButton()
            .setCustomId('ban_no')
            .setEmoji('')
            .setLabel('Rollerini Geri Ver')
            .setStyle('SUCCESS')
        )
        const linkRow = new MessageActionRow()
        .addComponents(
            new MessageButton()
            .setURL('')
        )
        await msgInt.reply({
            content:'Are you sure?',
            components:[row]
        })
    }
} as ICommand