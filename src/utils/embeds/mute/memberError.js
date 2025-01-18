import { EmbedBuilder } from 'discord.js';
import { PinkColor } from '../../embedEvents.js';

export default function memberError() {
  return new EmbedBuilder()
    .setDescription('Cannot find the user.')
    .setColor(PinkColor);
}
