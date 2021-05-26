module.exports = {
    name: 'shuffle',
    aliases: ['sh'],
    category: 'Music',
    utilisation: '{prefix}shuffle',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Nie jesteś na tym samym kanale głosowym!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Nie jesteś na tym samym kanale głosowym!`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Obecnie: cisza!`);

        const success = client.player.shuffle(message);

        if (success) message.channel.send(`${client.emotes.success} - Kolejka powtarza **${client.player.getQueue(message).tracks.length}** utwór/utwory !`);
    },
};
