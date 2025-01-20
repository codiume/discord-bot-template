import { EmbedBuilder } from 'discord.js';
import { PinkColor } from '../../embedEvents.js';

export default function lockTextBased() {
  return new EmbedBuilder()
    .setDescription('Please select a text channel!')
    .setColor(PinkColor);
}
