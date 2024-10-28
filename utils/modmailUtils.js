const { MessageEmbed } = require('discord.js');

module.exports = {
  createModmailThread: async (client, user) => {
    const guild = client.guilds.cache.get('857622993702486067');
    const modmailCategory = guild.channels.cache.find(c => c.name === 'Modmail' && c.type === 'GUILD_CATEGORY');

    let modmailChannel = guild.channels.cache.find(c => c.name === `modmail-${user.username}`);

    if (!modmailChannel) {
      modmailChannel = await guild.channels.create(`modmail-${user.username}`, {
        type: 'GUILD_TEXT',
        topic: `Modmail thread with ${user.tag}`,
        parent: modmailCategory ? modmailCategory.id : null
      });
    }
    return modmailChannel;
  },

  sendModmailResponse: (channel, content) => {
    const embed = new MessageEmbed()
      .setDescription(content)
      .setColor('#0099ff')
      .setTimestamp();
    channel.send({ embeds: [embed] });
  }
};
