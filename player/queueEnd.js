module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} - Brak muzyki, więc zatrzymałam kolejkę!`);
};