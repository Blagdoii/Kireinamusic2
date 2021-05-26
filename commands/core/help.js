module.exports = {
    name: 'hmusic',
    aliases: ['h'],
    category: 'Core',
    utilisation: '{prefix}helpmusic <command name>',

    execute(client, message, args) {
        if (!args[0]) {
            const infos = message.client.commands.filter(x => x.category == 'Infos').map((x) => '`' + x.name + '`').join(', ');
            const music = message.client.commands.filter(x => x.category == 'Music').map((x) => '`' + x.name + '`').join(', ');

            message.channel.send({
                embed: {
                    color: 'BLACK',
                    author: { name: 'Pomoc' },
                    footer: { text: 'Strefa muzyczna' },
                    fields: [
                        { name: 'Bot', value: infos },
                        { name: 'Muzyka', value: music },
                        { name: 'Filters', value: client.filters.map((x) => '`' + x + '`').join(', ') },
                    ],
                    timestamp: new Date(),
                    description: `Powered by Kireina`,
                },
            });
        } else {
            const command = message.client.commands.get(args.join(" ").toLowerCase()) || message.client.commands.find(x => x.aliases && x.aliases.includes(args.join(" ").toLowerCase()));

            if (!command) return message.channel.send(`${client.emotes.error} - I did not find this command !`);

            message.channel.send({
                embed: {
                    color: 'BLACK',
                    author: { name: 'Pomoc' },
                    footer: { text: 'Kireina' },
                    fields: [
                        { name: 'Nazwa', value: command.name, inline: true },
                        { name: 'Kategoria', value: command.category, inline: true },
                        { name: 'Aliasy', value: command.aliases.length < 1 ? 'None' : command.aliases.join(', '), inline: true },
                        { name: 'Inne', value: command.utilisation.replace('{prefix}', client.config.discord.prefix), inline: true },
                    ],
                    timestamp: new Date(),
                    description: 'v1',
                }
            });
        };
    },
};
