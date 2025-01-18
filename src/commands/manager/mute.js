import { PermissionFlagsBits, SlashCommandBuilder } from 'discord.js';
import { memberError, moderatableError, muteEmbed, FailedMute } from '../../utils/embeds/mute/index.js';

export default {
  data: new SlashCommandBuilder()
    .setName('mute')
    .setDescription('Mute a user temporarily.')
    .addUserOption(option =>
      option
        .setName('target')
        .setDescription('The user to mute')
        .setRequired(true)
    )
    .addIntegerOption(option =>
      option
        .setName('duration')
        .setDescription('Mute duration in minutes')
        .setRequired(true)
    )
    .addStringOption(option =>
      option
        .setName('reason')
        .setDescription('Reason for muting the user')
        .setRequired(false)
    )
    .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers),
  async execute(interaction) {
    const target = interaction.options.getUser('target');
    const member = interaction.guild.members.cache.get(target.id);
    const duration = interaction.options.getInteger('duration');
    const reason = interaction.options.getString('reason') || 'No reason provided.';

    if (!member) {
      return interaction.reply({
        embeds: [memberError()],
        ephemeral: true
      });
    }

    if (!member.moderatable) {
      return interaction.reply({
        embeds: [moderatableError()],
        ephemeral: true
      });
    }

    const milliseconds = duration * 60 * 1000;

    try {
      await member.timeout(milliseconds, reason);
      return interaction.reply({
        embeds: [muteEmbed(member.user.tag, duration, reason, interaction)],
        ephemeral: true
      });
    } catch (error) {
      console.error(error);
      return interaction.reply({
        embeds: [FailedMute(member.user.tag)],
        ephemeral: true
      });
    }
  }
};
