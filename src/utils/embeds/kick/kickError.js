import { EmbedBuilder } from 'discord.js';
import { PinkColor } from '../../embedEvents.js';

export default function kickError() {
  return new EmbedBuilder()
    .setDescription('Please provide a valid user to kick.')
    .setColor(PinkColor);
}
