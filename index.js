require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

const loadCommands = require('./handlers/commandHandler');
const loadEvents = require('./handlers/eventHandler');

const client = new Client({
    intents: [
        GatewayIntentBits.DirectMessageReactions,
        GatewayIntentBits.DirectMessageTyping,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.GuildInvites,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.GuildMessageTyping,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildModeration,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.Guilds,
        GatewayIntentBits.MessageContent
    ]
});

const log = (message) => console.log(chalk.blue('[INFO]'), message);
const success = (message) => console.log(chalk.green('[SUCCESS]'), message);
const error = (message) => console.log(chalk.red('[ERROR]'), message);

// Event-Handler für das dynamische Laden von Events
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

loadCommands(client);
loadEvents(client);

// Logge den Start
client.once('ready', () => {
    success(`Bot ${client.user.tag} is online and ready!`);
    log(`Logged in as ${chalk.bold(client.user.tag)}`);
    log(`Currently serving ${chalk.bold(client.guilds.cache.size)} guilds`);
    log(`Commands and event handlers are now being loaded...`);
});

// Login via Token in the .env-file
client.login(process.env.TOKEN).then(() => {
    success(`Successfully logged in!`);
}).catch(err => {
    error('Failed to login. Check your .env file and token.');
    console.error(err);
});