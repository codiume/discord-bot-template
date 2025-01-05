import 'dotenv/config';
import { Client, Collection, GatewayIntentBits } from 'discord.js';
import { loadEvents } from './utils/loadEvents.js';
import { loadCommands } from './utils/loadCommands.js';

class DiscordTemplate {
  constructor() {
    this.client = new Client({
      intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
      ]
    });

    this.client.commands = new Collection();
  }

  async start() {
    await loadCommands(this.client);
    await loadEvents(this.client);

    this.client.login(process.env.DISCORD_BOT_TOKEN);
  }
}

const bot = new DiscordTemplate();
bot.start();
