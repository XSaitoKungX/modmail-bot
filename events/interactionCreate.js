
module.exports = async (client, interaction) => {
    if (!interaction.isCommand()) return;

    const command = client.commands.get(interaction.commandName);
    if (command) {
        try {
            await command.execute(interaction);
        } catch (error) {
            console.error(error);
            interaction.reply({ content: 'There was an error executing that command.', ephemeral: true });
        }
    }
};
