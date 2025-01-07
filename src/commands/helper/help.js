import { SlashCommandBuilder } from 'discord.js';
import { helpEmbed, NoCommandFound } from '../../utils/embeds/help/index.js';

export default {
  data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('Displays a list of available commands'),
  async execute(interaction) {
    const commands = interaction.client.commands;

    if (!commands || commands.size === 0) {
      return interaction.reply({
        embeds: [NoCommandFound()],
        ephemeral: true
      });
    }

    await interaction.reply({ embeds: [helpEmbed(commands, interaction)] });
  }
};
