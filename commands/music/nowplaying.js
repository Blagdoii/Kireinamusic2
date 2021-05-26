module.exports = {
    name: 'nowplaying',
    aliases: ['np'],
    category: 'Music',
    utilisation: '{prefix}nowplaying',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Nie jesteś na kanale głosowym!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Nie jesteś na tym samym kanale, co ja!`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Obecnie brak muzyki!`);

        const track = client.player.nowPlaying(message);
        const filters = [];

        Object.keys(client.player.getQueue(message).filters).forEach((filterName) => client.player.getQueue(message).filters[filterName]) ? filters.push(filterName) : false;

        message.channel.send({
            embed: {
                color: 'RED',
                author: { name: track.title },
                footer: { text: 'KireinaBeta' },
                fields: [
                    { name: 'Kanał', value: track.author, inline: true },
                    { name: 'Dodane przez', value: track.requestedBy.username, inline: true },
                    { name: 'z Playlisty', value: track.fromPlaylist ? 'Yes' : 'No', inline: true },

                    { name: 'Wyświetlenia', value: track.views, inline: true },
                    { name: 'Czas', value: track.duration, inline: true },
                    { name: 'Filtry', value: filters.length + '/' + client.filters.length, inline: true },

                    { name: 'Głośność', value: client.player.getQueue(message).volume, inline: true },
                    { name: 'Powtórka', value: client.player.getQueue(message).repeatMode ? 'Tak' : 'Nie', inline: true },
                    { name: 'Wstrzymana', value: client.player.getQueue(message).paused ? 'Tak' : 'Nie', inline: true },

                    { name: 'Progres', value: client.player.createProgressBar(message, { timecodes: true }), inline: true }
                ],
                thumbnail: { url: track.thumbnail },
                timestamp: new Date(),
            },
        });
    },
};
