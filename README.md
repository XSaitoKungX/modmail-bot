# 📬 Advanced Modmail Discord Bot

Ein professioneller, voll funktionsfähiger Modmail-Bot für Discord, entwickelt mit `discord.js` v14.16.3. Unterstützt **Prefix- und Slash-Befehle**, **mehrsprachige Unterstützung**, und ein **Dashboard** für einfache Verwaltung. 

![Modmail Bot](https://img.shields.io/badge/Modmail-Bot-blue?style=for-the-badge&logo=discord)

---

## 📝 Inhaltsverzeichnis

- [Features](#-features)
- [Installation](#-installation)
- [Konfiguration](#-konfiguration)
- [Verwendung](#-verwendung)
- [Ordnerstruktur](#-ordnerstruktur)
- [Fortschritt & To-Do](#-fortschritt--to-do)
- [Mitwirkende](#-mitwirkende)

---

## 🌟 Features

- 📨 **Modmail-System:** Erhält Benutzer-DMs und leitet sie an das Moderationsteam weiter.
- 🔄 **Prefix- und Slash-Befehle:** Unterstützt beide Befehlstypen für vielseitige Verwendung.
- 🌐 **Mehrsprachigkeit:** Anpassbare Sprachdateien für mehrsprachige Nutzung (`en_EN`, `de_DE`, `fr_FR`).
- 📊 **Dashboard:** Übersichtliche Weboberfläche für Serveradministratoren (in Entwicklung).
- 🔒 **Multiguild-Unterstützung:** Kann auf mehreren Servern betrieben werden.

---

## 🚀 Installation

### Voraussetzungen
- Node.js `v16.6.0` oder höher
- Discord Bot Token
- Git für die Repositories

### Schritt-für-Schritt-Anleitung

1. **Repository klonen**
   ```bash
   git clone https://github.com/XSaitoKungX/modmail-bot.git
   cd modmail-bot
   ```

2. **Pakete installieren**
   ```bash
   npm install
   ```

3. **Umgebungsvariablen konfigurieren**
   Erstelle eine `.env`-Datei im Stammverzeichnis und füge den Token hinzu:
   ```plaintext
   TOKEN=YOUR_DISCORD_BOT_TOKEN
   ```

4. **Bot starten**
   ```bash
   npm start
   ```

---

## ⚙️ Konfiguration

Im Ordner `configs/` befinden sich die Konfigurationsdateien im `.yml`-Format:

- **`config.yml`:** Enthält wichtige Bot-Parameter wie Token, Bot-ID und Bot-Geheimnis.
- **`commands.yml`:** Aktiviert oder deaktiviert bestimmte Befehle, z. B. `modmail: true`.
- **`lang/` (Sprachdateien):** Enthält `en_EN.yml`, `de_DE.yml` und `fr_FR.yml` für eine flexible Sprachausgabe.

### Beispiel für `config.yml`

```yaml
token: "YOUR_DISCORD_BOT_TOKEN"
botid: "YOUR_BOT_ID"
botsecret: "YOUR_BOT_SECRET"
botname: "ModmailBot"
```

### Beispiel für `commands.yml`

```yaml
modmail: true
close: true
ping: true
```

---

## 📖 Verwendung

### Prefix-Befehle
Der Standard-Prefix ist `!`. Beispiel:
- `!close` – Schließt den aktuellen Modmail-Thread (nur in Modmail-Kanälen).

### Slash-Befehle
Slash-Befehle sind über `/` verfügbar. Beispiel:
- `/ping` – Überprüft die Latenz des Bots.

### Modmail-System
- **DM an den Bot:** Erstellt automatisch einen Modmail-Thread auf dem Server.
- **Antwort vom Mod-Team:** Wird in die DM des Benutzers zurückgesendet.

---

## 📂 Ordnerstruktur

```plaintext
modmail-bot/
├── commands/                # Alle Slash-Befehle
│   ├── ping.js              # Beispiel: Ping-Slash-Command
├── messages/                # Alle Prefix-Befehle
│   ├── close.js             # Beispiel: Close-Command für Modmail-Threads
├── configs/                 # Konfigurationsdateien
│   ├── lang/                # Sprachdateien
│   │   ├── en_EN.yml
│   │   ├── de_DE.yml
│   │   └── fr_FR.yml
│   ├── commands.yml         # Konfiguration für Befehls-Aktivierung
│   └── config.yml           # Bot- und API-Konfigurationen
├── dashboard/               # Dashboard-Frontend und -Backend
├── events/                  # Event-Handler für den Bot (z.B. ready, messageCreate)
│   ├── guildCreate.js
│   └── ready.js
├── handlers/                # Handler für Commands und Events
│   ├── commandHandler.js
│   └── eventHandler.js
├── utils/                   # Hilfsfunktionen und Middleware
│   ├── modmailUtils.js      # Modmail-spezifische Funktionen
│   └── languageManager.js   # Sprachverwaltung
├── .env                     # Umgebungsvariablen (z.B. Token)
├── index.js                 # Haupteinstiegspunkt für den Bot
└── package.json
```

---

## 📊 Fortschritt & To-Do

### Fortschritt

- [x] Grundlegende Modmail-Funktionalität
- [x] Prefix- und Slash-Befehle
- [x] Dynamisches Laden von Events und Befehlen
- [x] Mehrsprachige Unterstützung
- [ ] Dashboard-Integration (in Arbeit)

### To-Do

- [ ] Erweiterung des Dashboards für eine einfache Verwaltung
- [ ] Rollenbasiertes Zugriffsmanagement im Modmail-Thread
- [ ] Automatische Schließung inaktiver Modmail-Threads
- [ ] Integration eines Logging-Systems für Modmail-Nachrichten
- [ ] Erweiterte Konfigurationsoptionen für Multiguild-Betrieb

---

## 👥 Mitwirkende

- **Bot-Entwickler:** Dein Name
- **Design & Testing:** Dein Team
- **Repository:** [GitHub Link](https://github.com/XSaitoKungX/modmail-bot)

---

## 📜 Lizenz

Dieses Projekt steht unter der [MIT-Lizenz](https://opensource.org/licenses/MIT).

---

Danke fürs Nutzen des Modmail-Bots! 🙌 Feedback und Vorschläge sind jederzeit willkommen.
