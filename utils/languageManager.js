const fs = require('fs');
const yaml = require('yaml');
const path = require('path');

const languages = {};

const loadLanguages = () => {
    const langDir = path.join(__dirname, '../configs/lang');
    fs.readdirSync(langDir).forEach(file => {
        if (file.endsWith('.yml')) {
            const langName = file.split('.')[0];
            const filePath = path.join(langDir, file);
            const langContent = yaml.parse(fs.readFileSync(filePath, 'utf8'));
            languages[langName] = langContent;
        }
    });
};

const getMessage = (lang, key) => {
    return languages[lang]?.[key] || `Key '${key}' not found in language '${lang}'`;
};

// Lade Sprachen beim Start
loadLanguages();

module.exports = { getMessage };
