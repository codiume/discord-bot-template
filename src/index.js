import 'dotenv/config';
import { Client, GatewayIntentBits } from 'discord.js';
import { loadEvents } from './utils/loadEvents.js';

class DiscordTemplate {
  constructor(client) {
    this.client = client || new Client({
      intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
      ]
    });
  }

  async start() {
    await loadEvents(this.client);

    this.client.login(process.env.DISCORD_BOT_TOKEN);
  }
}

const bot = new DiscordTemplate();
bot.start();
