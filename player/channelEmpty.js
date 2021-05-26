module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} - Pusty kanał, więc się rozłączyłam!`);
};
