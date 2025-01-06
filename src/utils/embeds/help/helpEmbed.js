import { EmbedBuilder } from 'discord.js';
import { PinkColor } from '../../embedEvents.js';

export default function helpEmbed(commands, interaction) {
  return new EmbedBuilder()
    .setTitle('Help - List of Commands')
    .setDescription('Here is a list of all the available commands:')
    .setColor(PinkColor)
    .addFields(
      Array.from(commands.values()).map(command => ({
        name: `/${command.data.name}`,
        value: command.data.description || 'No description provided.'
      }))
    )
    .setFooter({
      text: `Requested by ${interaction.user.tag}`,
      iconURL: interaction.user.displayAvatarURL()
    })
    .setTimestamp();
}
