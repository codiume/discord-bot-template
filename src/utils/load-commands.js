import { Collection } from 'discord.js';

import commands from '../commands';

export const loadCommands = client => {
  client.commands = new Collection();

  for (const command of commands) {
    // Set a new item in the Collection
    // With the key as the command name and the value as the exported module
    client.commands.set(command.data.name, command);
  }
};
