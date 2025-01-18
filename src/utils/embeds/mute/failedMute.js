import { EmbedBuilder } from 'discord.js';
import { PinkColor } from '../../embedEvents.js';

export default function FailedMute(memberTag) {
  return new EmbedBuilder()
    .setDescription(`Failed to mute ${memberTag}.`)
    .setColor(PinkColor);
}
