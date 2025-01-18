import { SlashCommandBuilder, PermissionFlagsBits } from 'discord.js';
import { memberPermissions, kickError, UserNotFound, kickEmbed, FailedKick } from '../../utils/embeds/kick/index.js';

export default {
  data: new SlashCommandBuilder()
    .setName('kick')
    .setDescription('Kick a user from the server.')
    .addUserOption(option =>
      option.setName('target')
        .setDescription('The user to kick')
        .setRequired(true))
    .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers),
  async execute(interaction) {
    if (!interaction.memberPermissions?.has(PermissionFlagsBits.KickMembers)) {
      return interaction.reply({
        embeds: [memberPermissions()],
        ephemeral: true
      });
    }

    const targetUser = interaction.options.getUser('target');
    if (!targetUser) {
      return interaction.reply({
        embeds: [kickError()],
        ephemeral: true
      });
    }

    const member = await interaction.guild?.members.fetch(targetUser.id);
    if (!member) {
      return interaction.reply({
        embeds: [UserNotFound()],
        ephemeral: true
      });
    }

    try {
      await member.kick();
      return interaction.reply({ embeds: [kickEmbed(targetUser.tag, interaction)], ephemeral: true });
    } catch (error) {
      return interaction.reply({
        embeds: [FailedKick()],
        ephemeral: true
      });
    }
  }
};
