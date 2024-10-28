// utils/modmailUtils.js
const { MessageEmbed } = require('discord.js');

module.exports = {
  createModmailThread: async (client, user) => {
    const guild = client.guilds.cache.get('857622993702486067');
    const channel = await guild.channels.create(`modmail-${user.username}`, {
      type: 'GUILD_TEXT',
      topic: `Modmail thread with ${user.tag}`
    });
    return channel;
  },

  sendModmailResponse: (channel, content) => {
    // Antwortet im Modmail-Thread-Channel
    const embed = new MessageEmbed()
      .setDescription(content)
      .setColor('#0099ff')
      .setTimestamp();

    channel.send({ embeds: [embed] });
  }
};
