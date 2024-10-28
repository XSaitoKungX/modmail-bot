const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

module.exports = (client) => {
    const loadEvents = (dir) => {
        fs.readdirSync(dir).forEach(file => {
            const filePath = path.join(dir, file);
            if (file.endsWith('.js')) {
                const event = require(filePath);
                const eventName = file.split('.')[0];
                client.on(eventName, event.bind(null, client));
                console.log(chalk.green(`[Loaded Event] ${eventName}`));
            }
        });
    };

    loadEvents(path.join(__dirname, '../events'));
};
