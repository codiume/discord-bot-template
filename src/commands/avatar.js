import { SlashCommandBuilder } from 'discord.js';
import { avatarEmbed } from '../utils/embeds/avatar/index.js';

export default {
  data: new SlashCommandBuilder()
    .setName('avatar')
    .setDescription('Shows the avatar of the mentioned user or yourself')
    .addUserOption(option =>
      option
        .setName('user')
        .setDescription('The user avatar to display')
        .setRequired(false)
    ),
  async execute(interaction) {
    const user = interaction.options.getUser('user') || interaction.user;
    const avatarUrl = user.displayAvatarURL({ dynamic: true, size: 1024 });

    await interaction.reply({ embeds: [avatarEmbed(user, avatarUrl, interaction)] });
  }
};
