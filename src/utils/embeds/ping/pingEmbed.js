import { EmbedBuilder } from 'discord.js';
import { PinkColor } from '../../embedEvents.js';

export default function pingEmbed(client, interaction) {
  const latency = client.ws.ping;
  const apiLatency = Date.now() - interaction.createdTimestamp;

  return new EmbedBuilder()
    .setAuthor({ name: interaction.user.displayName, iconURL: interaction.user.displayAvatarURL() ?? '' })
    .setDescription(`Pong! 🏓\n**API Latency**: ${apiLatency}ms\n**WebSocket Latency**: ${latency}ms`)
    .setColor(PinkColor)
    .setFooter({ text: client.user?.displayName, iconURL: client.user?.displayAvatarURL() ?? '' })
    .setTimestamp();
}
