const Discord = require("discord.js")

//module.exports = {
    //name: "help",
    //aliases: ["h", "cmd", "command"],
    //run: async (client, message, args) => {
        //const embed = new Discord.MessageEmbed()
        //.setAuthor('Taro','https://cdn.discordapp.com/attachments/845378017206206564/845670711150510140/healed2.png')
        //.setTitle('**My Available Commands :**')
        //.setDescription('** **')
        //.setThumbnail(`https://cdn.discordapp.com/attachments/845378017206206564/845670711150510140/healed2.png`)
        //.addField(`**-**`, client.commands.map(cmd => `\`${cmd.name}\``).join(", "))
        //.setColor(0xFFFF00)
        //.setFooter(`Requested By ${message.author.username}`,`${message.author.displayAvatarURL()}`)
        //.setTimestamp()
        //message.channel.send(embed)
    //}
//}

module.exports = {
name: "help",
    aliases: ["h", "cmd", "command"],
    run: async (client, message, args) => {
        const embed = new Discord.MessageEmbed()
        .setAuthor('Taro X','https://cdn.discordapp.com/attachments/844897900907593759/849250051813408829/794292-new-black-art-wallpadecomissionper-2560x20cccc48.jpg')
        .setTitle('**My Available Commands :**')
        .setDescription('*Prefix: x.*')
        .setThumbnail(`https://cdn.discordapp.com/attachments/844897900907593759/849250051813408829/794292-new-black-art-wallpadecomissionper-2560x20cccc48.jpg`)
        .addField(`**Utility**`, `\`help\`,\`invite\`,\`ping\``)
        .addField(`**Music**`, `\`play\`,\`pause\`,\`skip\`,\`stop\`,\`queue\`,\`repeat\`,\`resume\`,\`volume\`,\`filter\``)
        .setColor(0xFFFF00)
        .setFooter(`Requested By ${message.author.username}`,`${message.author.displayAvatarURL()}`)
        .setTimestamp()
        .addField(`** **`, `*For more help join the [Support Server](https://discord.gg/NT2NujG)*`)


        message.channel.send(embed)
    }
}
