import { EmbedBuilder } from 'discord.js';
import { PinkColor } from '../../embedEvents.js';

export default function moderatableError() {
  return new EmbedBuilder()
    .setDescription('I cannot mute this user.')
    .setColor(PinkColor);
}
