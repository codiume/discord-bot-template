import { SlashCommandBuilder, PermissionsBitField, PermissionFlagsBits } from 'discord.js';
import { lockError, lockTextBased, lockEmbed } from '../../utils/embeds/lock/index.js';

export default {
  data: new SlashCommandBuilder()
    .setName('lock')
    .setDescription('Lock a text channel to prevent others from sending messages')
    .addChannelOption(option =>
      option.setName('channel')
        .setDescription('Select the channel to lock (if not selected, the current channel will be locked)')
        .setRequired(false)
    )
    .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers),
  async execute(interaction) {
    const channel = interaction.options.getChannel('channel');

    if (!channel.isTextBased()) {
      return interaction.reply({
        embeds: [lockTextBased()],
        ephemeral: true
      });
    }

    try {
      await channel.permissionOverwrites.edit(channel.guild.id, {
        [PermissionsBitField.Flags.SendMessages]: false
      });

      return interaction.reply({
        embeds: [lockEmbed(channel.name, interaction)],
        ephemeral: true
      });
    } catch (error) {
      console.error(error);
      return interaction.reply({
        embeds: [lockError()],
        ephemeral: true
      });
    }
  }
};
