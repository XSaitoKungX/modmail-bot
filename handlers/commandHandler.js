const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

module.exports = (client) => {
    client.commands = new Map();
    client.slashCommands = new Map();

    const loadCommands = (dir) => {
        fs.readdirSync(dir).forEach(file => {
            const filePath = path.join(dir, file);

            if (fs.statSync(filePath).isDirectory()) {
                loadCommands(filePath);
            } else if (file.endsWith('.js')) {
                const command = require(filePath);

                // Differentiation between prefix and slash commands
                if (command.slashCommand) {
                    client.slashCommands.set(command.data.name, command);
                    console.log(chalk.green(`[Loaded SlashCommand] ${command.data.name}`));
                } else {
                    client.commands.set(command.name, command);
                    console.log(chalk.backgroundColorNames(`[Loaded Prefix Command] ${command.name}`));
                }
            }
        });
    };

    loadCommands(path.join(__dirname, '../commands'));
};
