module.exports = {
    name: 'skip',
    aliases: ['sk'],
    category: 'Music',
    utilisation: '{prefix}skip',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Nie ma cie na kanale!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Nie jesteś na tym samym kanale głosowym!`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Zero muzyki, aż piszczy w uszach!`);

        const success = client.player.skip(message);

        if (success) message.channel.send(`${client.emotes.success} - Muza **skipneła**!`);
    },
};
