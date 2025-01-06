import { EmbedBuilder } from 'discord.js';
import { PinkColor } from '../../embedEvents.js';

export default function NoCommandFound() {
  return new EmbedBuilder()
    .setDescription('❌ No commands found!')
    .setColor(PinkColor);
}
