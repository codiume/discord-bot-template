import { SlashCommandBuilder } from 'discord.js';
import { uptimeEmbed, uptimeError } from '../../utils/embeds/uptime/index.js';
import { formatUptime } from '../../utils/formatUptime.js';

export default {
  data: new SlashCommandBuilder()
    .setName('uptime')
    .setDescription('Displays the bot uptime'),
  async execute(interaction) {
    const uptime = interaction.client.uptime;

    if (!uptime) {
      return interaction.reply({
        embeds: [uptimeError()],
        ephemeral: true
      });
    }

    await interaction.reply({ embeds: [uptimeEmbed(formatUptime(uptime), interaction)] });
  }
};
