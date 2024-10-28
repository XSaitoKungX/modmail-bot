// handlers/commandHandler.js
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

module.exports = (client) => {
    client.commands = new Map();
    client.prefixCommands = new Map();

    // Load all prefix commands from the /messages folder
    const loadPrefixCommands = (dir) => {
        fs.readdirSync(dir).forEach(file => {
            const filePath = path.join(dir, file);
            if (file.endsWith('.js')) {
                const command = require(filePath);
                client.prefixCommands.set(command.name, command);
                console.log(chalk.blue(`[Loaded Prefix Command] ${command.name}`));
            }
        });
    };

    // Load all slash commands from the /commands folder
    const loadSlashCommands = (dir) => {
        fs.readdirSync(dir).forEach(file => {
            const filePath = path.join(dir, file);
            if (file.endsWith('.js')) {
                const command = require(filePath);
                client.commands.set(command.data.name, command);
                console.log(chalk.green(`[Loaded Slash Command] ${command.data.name}`));
            }
        });
    };

    loadPrefixCommands(path.join(__dirname, '../messages'));
    loadSlashCommands(path.join(__dirname, '../commands'));
};
