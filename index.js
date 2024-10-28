require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

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

// Konsolenhilfe mit Farben
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

// Lade Events (später werden wir Events im events-Ordner hinzufügen)
loadEvents(path.join(__dirname, 'events'));

// Command-Handler (dieser Bereich wird später ergänzt)
const loadCommands = () => {
    // Placeholder für das Laden der Befehle
    log('Commands are being loaded...');
};

// Führe Command-Handler aus
loadCommands();

// Logge den Start
client.once('ready', () => {
    success(`Bot ${client.user.tag} is online and ready!`);
    log(`Logged in as ${chalk.bold(client.user.tag)}`);
    log(`Currently serving ${chalk.bold(client.guilds.cache.size)} guilds`);
    log(`Commands and event handlers are now being loaded...`);
});

// Login über Token in der .env-Datei
client.login(process.env.TOKEN).then(() => {
    success(`Successfully logged in!`);
}).catch(err => {
    error('Failed to login. Check your .env file and token.');
    console.error(err);
});