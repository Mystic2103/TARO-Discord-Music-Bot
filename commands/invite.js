const Discord = require("discord.js")


/*
module.exports = {
    name: "invite",
    aliases: ["support server", "server"],
    run: async (client, message, args) => {
        const embed = new Discord.MessageEmbed()
        .setAuthor('Taro','https://cdn.discordapp.com/attachments/845378017206206564/845670711150510140/healed2.png')
        .addFields(
            { name: '** **', value: '**Invite Me By [Clicking Here](https://discord.com/api/oauth2/authorize?client_id=845374552845582336&permissions=2251685312&scope=bot)** \n\n**Support Server : [Click Here](https://discord.gg/NT2NujG)**'})    
        .setColor(0xFFFF00)
        .setTimestamp()
        .setFooter(`Requested By ${message.author.username}`,`${message.author.displayAvatarURL()}`)
        message.channel.send(embed)
    }
}
*/


module.exports = {
    name: "invite",
    aliases: ["support server", "server"],
    run: async (client, message, args) => {
        const embed = new Discord.MessageEmbed()
        .setAuthor('Taro X','https://cdn.discordapp.com/attachments/844897900907593759/849250051813408829/794292-new-black-art-wallpadecomissionper-2560x20cccc48.jpg')
        .addFields(
            { name: '** **', value: '**Invite Me By [Clicking Here](https://discord.com/oauth2/authorize?client_id=845374552845582336&permissions=8&scope=bot)** \n\n**Support Server : [Click Here](https://discord.gg/NT2NujG)** \n\n ** **'})    
        .setColor(0xFFFF00)
        .setTimestamp()
        .setFooter(`Requested By ${message.author.username}`,`${message.author.displayAvatarURL()}`)
        message.channel.send(embed)
    }
}