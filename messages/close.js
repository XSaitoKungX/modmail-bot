module.exports = {
    name: 'close',
    description: 'Closes the current Modmail thread',
    async execute(client, message, args) {
        if (!message.channel.name.startsWith('modmail-')) {
            return message.reply('This command can only be used in a Modmail thread.');
        }

        await message.channel.send('This Modmail thread is now closed.');
        await message.channel.delete();
    }
};
