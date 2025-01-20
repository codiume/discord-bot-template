import { EmbedBuilder } from 'discord.js';
import { PinkColor } from '../../embedEvents.js';

export default function lockEmbed(channelName, interaction) {
  return new EmbedBuilder()
    .setDescription(`The channel **${channelName}** has been successfully locked. Users can no longer send messages.`)
    .setColor(PinkColor)
    .setFooter({
      text: `Requested by ${interaction.user.tag}`,
      iconURL: interaction.user.displayAvatarURL()
    })
    .setTimestamp();
}
