import 'dotenv/config';
import { Client, GatewayIntentBits } from 'discord.js';
import { loadCommands } from './utils/load-commands';
import { loadEvents } from './utils/load-events';

(async () => {
  // Create a new client instance
  const client = new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMembers
    ]
  });

  loadCommands(client);

  loadEvents(client);

  // Login to Discord with your client's token
  try {
    await client.login(process.env.DISCORD_BOT_TOKEN);
  } catch (error) {
    process.exit(1);
  }
})();
