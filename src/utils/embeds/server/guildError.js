import { EmbedBuilder } from 'discord.js';
import { PinkColor } from '../../embedEvents.js';

export default function guildError() {
  return new EmbedBuilder()
    .setDescription('This command can only be used in a server!')
    .setColor(PinkColor);
}
