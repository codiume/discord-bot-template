import { SlashCommandBuilder } from 'discord.js';
import { pingEmbed } from '../../utils/embeds/ping/index.js';

export default {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with Pong!'),
  async execute(interaction) {
    const client = interaction.client;
    await interaction.reply({ embeds: [pingEmbed(client, interaction)] });
  }
};
