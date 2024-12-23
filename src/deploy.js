import 'dotenv/config';
import chalk from 'chalk';
import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v10';

import commands from './commands';

const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_BOT_TOKEN);

rest
  .put(
    process.env.DISCORD_GUILD_ID
      ? Routes.applicationGuildCommands(
        process.env.DISCORD_CLIENT_ID,
        process.env.DISCORD_GUILD_ID
      )
      : Routes.applicationCommands(process.env.DISCORD_CLIENT_ID),
    { body: commands.map(command => command.data.toJSON()) }
  )
  .then(() =>
    console.log(chalk.green('⚡ Successfully registered application commands.'))
  )
  .catch(console.error);
