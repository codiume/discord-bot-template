import { EmbedBuilder } from 'discord.js';
import { PinkColor } from '../../embedEvents.js';

export default function serverInfoEmbed(guild, owner, interaction) {
  return new EmbedBuilder()
    .setTitle(`📜 Server Info: ${guild.name}`)
    .setThumbnail(guild.iconURL({ dynamic: true }) || '')
    .setColor(PinkColor)
    .addFields(
      { name: '👑 Owner', value: `${owner.user.tag}`, inline: true },
      { name: '🆔 Server ID', value: `${guild.id}`, inline: true },
      { name: '👥 Members', value: `${guild.memberCount}`, inline: true },
      { name: '📅 Created On', value: `${guild.createdAt.toDateString()}`, inline: true },
      { name: '🌍 Region', value: `${guild.preferredLocale}`, inline: true },
      { name: '💬 Channels', value: `${guild.channels.cache.size}`, inline: true }
    )
    .setFooter({
      text: `Requested by ${interaction.user.tag}`,
      iconURL: interaction.user.displayAvatarURL({ dynamic: true })
    })
    .setTimestamp();
}
