import { EmbedBuilder } from 'discord.js';
import { PinkColor } from '../../embedEvents.js';

export default function UserNotFound() {
  return new EmbedBuilder()
    .setDescription('User not found in the server.')
    .setColor(PinkColor);
}
