import 'dotenv/config';
import { Client, GatewayIntentBits } from 'discord.js';

class DiscordTemplate {
  constructor(client) {
    this.client = client || new Client({
      intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
      ]
    });

    this.client.once('ready', () => {
      console.log(`Logged in as ${this.client.user.tag}`);
    });
  }

  start() {
    this.client.login(process.env.DISCORD_BOT_TOKEN);
  }
}

const bot = new DiscordTemplate();
bot.start();
