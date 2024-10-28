const { createModmailThread } = require('../utils/modmailUtils');
const { getMessage } = require('../utils/languageManager');

module.exports = async (client, message) => {
    if (message.author.bot || message.guild) return;

    const modmailChannel = await createModmailThread(client, message.author);

    modmailChannel.send(`New Modmail from ${message.author.tag}:\n${message.content}`);
};
