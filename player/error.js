module.exports = (client, error, message, ...args) => {
    switch (error) {
        case 'NotPlaying':
            message.channel.send(`${client.emotes.error} - Obecnie brak muzyki!`);
            break;
        case 'NotConnected':
            message.channel.send(`${client.emotes.error} - Nie jesteś połączony z kanałem głosowym !`);
            break;
        case 'UnableToJoin':
            message.channel.send(`${client.emotes.error} - Nie mam dostępu do tego kanału!`);
            break;
        case 'VideoUnavailable':
            message.channel.send(`${client.emotes.error} - ${args[0].title} Nie jest dostępny w tym kraju, pomijam...`);
            break;
        case 'MusicStarting':
            message.channel.send(`Uruchamianie.. Poczekaj i spróbuj ponownie!`);
            break;
        default:
            message.channel.send(`${client.emotes.error} - Something went wrong ... Error : ${error}`);
    };
};
