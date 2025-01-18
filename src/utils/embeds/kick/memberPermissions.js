import { EmbedBuilder } from 'discord.js';
import { PinkColor } from '../../embedEvents.js';

export default function memberPermissions() {
  return new EmbedBuilder()
    .setDescription('You do not have permission to kick members.')
    .setColor(PinkColor);
}
