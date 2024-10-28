module.exports = {
    name: 'ping',
    description: 'Check bot latency',
    async execute(client, message, args) {
        const sent = await message.reply('Pinging...');
        sent.edit(`Pong! Latency is ${sent.createdTimestamp - message.createdTimestamp}ms.`);
    }
};
