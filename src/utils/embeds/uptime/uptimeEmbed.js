import { EmbedBuilder } from 'discord.js';
import { PinkColor } from '../../embedEvents.js';

export default function uptimeEmbed(formatUptime, interaction) {
  return new EmbedBuilder()
    .setTitle('Bot Uptime')
    .setDescription('The bot has been running for:')
    .setColor(PinkColor)
    .addFields([{ name: 'Uptime', value: `\`${formatUptime}\`` }])
    .setFooter({
      text: `Requested by ${interaction.user.tag}`,
      iconURL: interaction.user.displayAvatarURL()
    })
    .setTimestamp();
}
