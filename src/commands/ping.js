import { SlashCommandBuilder } from '@discordjs/builders';

export const ping = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with Pong!'),
  async execute(interaction) {
    await interaction.reply('Pong!!!!');
  }
};

export default ping;
