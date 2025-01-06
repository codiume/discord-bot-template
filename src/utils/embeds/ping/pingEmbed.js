import { EmbedBuilder } from 'discord.js';
import { PinkColor } from '../../embedEvents.js';

export default function pingEmbed(client, interaction) {
  return new EmbedBuilder()
    .setAuthor({ name: interaction.user.displayName, iconURL: interaction.user.displayAvatarURL() ?? '' })
    .setDescription('Pong !')
    .setColor(PinkColor)
    .setFooter({ text: client.user?.displayName, iconURL: client.user?.displayAvatarURL() ?? '' })
    .setTimestamp();
}
