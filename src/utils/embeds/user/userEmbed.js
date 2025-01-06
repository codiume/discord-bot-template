import { EmbedBuilder } from 'discord.js';
import { PinkColor } from '../../embedEvents.js';

export default function userInfoEmbed(targetUser, member, interaction) {
  return new EmbedBuilder()
    .setTitle(`User Info: ${targetUser.tag}`)
    .setThumbnail(targetUser.displayAvatarURL({ dynamic: true }))
    .setColor(PinkColor)
    .addFields(
      { name: '🆔 User ID', value: targetUser.id, inline: true },
      { name: '🔰 Nickname', value: member?.nickname || 'None', inline: true },
      { name: '📅 Account Created', value: `<t:${Math.floor(targetUser.createdTimestamp / 1000)}:F>`, inline: false },
      { name: '📥 Joined Server', value: member ? `<t:${Math.floor(member.joinedTimestamp / 1000)}:F>` : 'N/A', inline: false },
      { name: '🎨 Roles', value: member?.roles.cache.map(role => role.toString()).join(', ') || 'None', inline: false }
    )
    .setFooter({
      text: `Requested by ${interaction.user.tag}`,
      iconURL: interaction.user.displayAvatarURL({ dynamic: true })
    })
    .setTimestamp();
}
