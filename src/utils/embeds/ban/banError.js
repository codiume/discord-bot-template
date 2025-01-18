import { EmbedBuilder } from 'discord.js';
import { PinkColor } from '../../embedEvents.js';

export default function banError() {
  return new EmbedBuilder()
    .setDescription('Please provide a valid user to ban.')
    .setColor(PinkColor);
}
