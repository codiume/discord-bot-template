import { readdir } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { REST, Routes } from 'discord.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export async function loadCommands(client) {
  const commandsPath = path.resolve(__dirname, '../commands');
  const commands = [];

  try {
    const commandFiles = (await readdir(commandsPath)).filter(file => file.endsWith('.js'));

    for (const file of commandFiles) {
      const { default: command } = await import(`file://${path.join(commandsPath, file)}`);

      if (!command?.data?.name) {
        console.warn(`⚠️ Skipped invalid command file: ${file}`);
        continue;
      }

      client.commands.set(command.data.name, command);
      commands.push(command.data.toJSON());
      console.log(`✅ Loaded command: ${command.data.name}`);
    }

    const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_BOT_TOKEN);
    console.log('🔄 Deploying application (/) commands...');

    await rest.put(
      Routes.applicationCommands(process.env.DISCORD_CLIENT_ID),
      { body: commands }
    );

    console.log('✅ Successfully deployed application (/) commands.');
  } catch (error) {
    console.error(`❌ Failed to load or deploy commands: ${error.message}`);
  }
}
