module.exports = {
    name: "ping",
    aliases: ["latency"],
    run: async (client, message) => {
        message.channel.send(`**${Date.now() - message.createdTimestamp}ms.**`)
    }
}