import { EmbedBuilder } from 'discord.js';
import { PinkColor } from '../../embedEvents.js';

export default function uptimeError() {
  return new EmbedBuilder()
    .setDescription('❌ Unable to fetch uptime!')
    .setColor(PinkColor);
}
