import { EmbedBuilder } from 'discord.js';
import { PinkColor } from '../../embedEvents.js';

export default function FailedBan() {
  return new EmbedBuilder()
    .setDescription('Failed to ban the user. Please try again later.')
    .setColor(PinkColor);
}
