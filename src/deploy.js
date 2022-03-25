import 'dotenv/config';
import chalk from 'chalk';
import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';

import commands from './commands';

const rest = new REST({ version: '9' }).setToken(process.env.DISCORD_BOT_TOKEN);

rest
  .put(
    Routes.applicationGuildCommands(
      process.env.DISCORD_CLIENT_ID,
      process.env.DISCORD_GUILD_ID
    ),
    { body: commands.map(command => command.data.toJSON()) }
  )
  .then(() =>
    console.log(chalk.green('⚡ Successfully registered application commands.'))
  )
  .catch(console.error);
