import { SlashCommandBuilder } from 'discord.js';
import { serverInfoEmbed, guildError } from '../../utils/embeds/server/index.js';

export default {
  data: new SlashCommandBuilder()
    .setName('server-info')
    .setDescription('Displays information about the server'),
  async execute(interaction) {
    const { guild } = interaction;

    if (!guild) {
      return interaction.reply({
        embeds: [guildError()],
        ephemeral: true
      });
    }

    const owner = await guild.fetchOwner();

    await interaction.reply({ embeds: [serverInfoEmbed(guild, owner, interaction)] });
  }
};
