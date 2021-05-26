module.exports = (client, message, queue, playlist) => {
    message.channel.send(`${client.emotes.music} - ${playlist.title} dodała (**${playlist.tracks.length}** utwórów) !`);
};
