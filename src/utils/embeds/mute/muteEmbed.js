import { EmbedBuilder } from 'discord.js';
import { PinkColor } from '../../embedEvents.js';

export default function muteEmbed(memberTag, duration, reason, interaction) {
  return new EmbedBuilder()
    .setDescription(`Successfully muted ${memberTag} for ${duration} minute(s). Reason: ${reason}`)
    .setColor(PinkColor)
    .setFooter({
      text: `Requested by ${interaction.user.tag}`,
      iconURL: interaction.user.displayAvatarURL()
    })
    .setTimestamp();
}
