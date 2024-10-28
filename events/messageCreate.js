const { createModmailThread } = require('../utils/modmailUtils');
const { getMessage } = require('../utils/languageManager');

module.exports = async (client, message) => {
    if (message.author.bot) return;

    if (message.guild) {
        // Modmail Antwort: Nachricht von einem Moderator in einem Modmail-Thread
        if (message.channel.name.startsWith('modmail-')) {
            const userId = message.channel.name.split('-')[1];
            const user = await client.users.fetch(userId);

            if (user) {
                user.send(`Reply from ${message.author.tag}:\n${message.content}`);
            }
        }
    } else {
        // Nachricht ist eine DM, also Modmail starten
        const modmailChannel = await createModmailThread(client, message.author);
        modmailChannel.send(`New Modmail from ${message.author.tag}:\n${message.content}`);
    }
};
