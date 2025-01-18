import { EmbedBuilder } from 'discord.js';
import { PinkColor } from '../../embedEvents.js';

export default function banEmbed(targetUser, reason, interaction) {
  return new EmbedBuilder()
    .setDescription(`${targetUser} has been banned from the server. Reason: ${reason}`)
    .setFooter({
      text: `Requested by ${interaction.user.tag}`,
      iconURL: interaction.user.displayAvatarURL()
    })
    .setColor(PinkColor)
    .setTimestamp();
}
