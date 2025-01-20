import { EmbedBuilder } from 'discord.js';
import { PinkColor } from '../../embedEvents.js';

export default function lockError() {
  return new EmbedBuilder()
    .setDescription('An error occurred while locking the channel.')
    .setColor(PinkColor);
}
