module.exports = (client, message, track) => {
    message.channel.send(`${client.emotes.music} - Teraz gram ${track.title} na ${message.member.voice.channel.name} ...`);
};
