import { EmbedBuilder } from 'discord.js';
import { PinkColor } from '../../embedEvents.js';

export default function kickEmbed(targetUser, interaction) {
  return new EmbedBuilder()
    .setDescription(`${targetUser} has been kicked from the server.`)
    .setFooter({
      text: `Requested by ${interaction.user.tag}`,
      iconURL: interaction.user.displayAvatarURL()
    })
    .setColor(PinkColor)
    .setTimestamp();
}
