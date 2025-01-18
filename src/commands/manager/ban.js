import { SlashCommandBuilder, PermissionFlagsBits } from 'discord.js';
import { memberPermissions, banError, UserNotFound, FailedBan, banEmbed } from '../../utils/embeds/ban/index.js';

export default {
  data: new SlashCommandBuilder()
    .setName('ban')
    .setDescription('Ban a user from the server.')
    .addUserOption(option =>
      option.setName('target')
        .setDescription('The user to ban')
        .setRequired(true))
    .addStringOption(option =>
      option.setName('reason')
        .setDescription('The reason for the ban')
        .setRequired(false))
    .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers),
  async execute(interaction) {
    if (!interaction.memberPermissions?.has(PermissionFlagsBits.BanMembers)) {
      return interaction.reply({
        embeds: [memberPermissions()],
        ephemeral: true
      });
    }

    const targetUser = interaction.options.getUser('target');
    if (!targetUser) {
      return interaction.reply({
        embeds: [banError()],
        ephemeral: true
      });
    }

    const reason = interaction.options.getString('reason') || 'No reason provided';
    const member = await interaction.guild?.members.fetch(targetUser.id);

    if (!member) {
      return interaction.reply({
        embeds: [UserNotFound()],
        ephemeral: true
      });
    }

    try {
      await member.ban({ reason });
      return interaction.reply({
        embeds: [banEmbed(targetUser.tag, reason, interaction)],
        ephemeral: true
      });
    } catch (error) {
      console.error(error);
      return interaction.reply({
        embeds: [FailedBan()],
        ephemeral: true
      });
    }
  }
};
