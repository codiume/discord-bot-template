import { EmbedBuilder } from 'discord.js';
import { PinkColor } from '../../embedEvents.js';

export default function avatarEmbed(user, avatarUrl, interaction) {
  return new EmbedBuilder()
    .setAuthor({
      name: user.tag,
      iconURL: avatarUrl
    })
    .setTitle('User Avatar')
    .setDescription(`[Click here to view in full size](${avatarUrl})`)
    .setImage(avatarUrl)
    .setTimestamp()
    .setFooter({
      text: `Requested by ${interaction.user.tag}`,
      iconURL: interaction.user.displayAvatarURL()
    })
    .setColor(PinkColor)
    .setTimestamp();
}
