import { ICommand } from "wokcommands";

export default {
    category:'Testing',
    description:'Replies With Pong',
    slash:'both',
    testOnly:true,
    callback: ({ message , interaction }) => {
        return 'Pong'
    },
} as ICommand