module.exports = async (client, guild) => {
    const defaultChannel = guild.systemChannel || guild.channels.cache.find(channel => channel.isText() && channel.permissionsFor(guild.me).has('SEND_MESSAGES'));

    if (defaultChannel) {
        defaultChannel.send(`Hello! Thanks for inviting me to ${guild.name}. Type !help to see what I can do.`);
    }

    console.log(`Joined new guild: ${guild.name} (ID: ${guild.id})`);
};
