import { EmbedBuilder } from 'discord.js';
import { PinkColor } from '../../embedEvents.js';

export default function FailedKick() {
  return new EmbedBuilder()
    .setDescription('Failed to kick the user. Please try again later.')
    .setColor(PinkColor);
}
