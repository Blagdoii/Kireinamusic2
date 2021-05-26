module.exports = {
    name: 'clear-queue',
    aliases: ['cq'],
    category: 'Music',
    utilisation: '{prefix}clear-queue',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Nie jesteś na kanale głosowym!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Nie jesteś na tym samym kanale, co ja!`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Żadna piosenka teraz nie leci!`);

        if (client.player.getQueue(message).tracks.length <= 1) return message.channel.send(`${client.emotes.error} - Jest tylko jeden utwór w kolejce..`);

        client.player.clearQueue(message);

        message.channel.send(`${client.emotes.success} - *Kolejka została usunięta!*`);
    },
};
