import { SlashCommandBuilder } from 'discord.js';
import { userInfoEmbed } from '../../utils/embeds/user/index.js';

export default {
  data: new SlashCommandBuilder()
    .setName('user-info')
    .setDescription('Displays information about you or another user')
    .addUserOption(option =>
      option.setName('target')
        .setDescription('The user to get information about')
        .setRequired(false)
    ),
  async execute(interaction) {
    const targetUser = interaction.options.getUser('target') || interaction.user;
    const member = interaction.guild?.members.cache.get(targetUser.id);

    await interaction.reply({ embeds: [userInfoEmbed(targetUser, member, interaction)] });
  }
};
