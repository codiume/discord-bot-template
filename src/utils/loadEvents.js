import { readdir } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export async function loadEvents(client) {
  const eventsPath = path.resolve(__dirname, '../events');

  try {
    const eventFiles = (await readdir(eventsPath)).filter(file => file.endsWith('.js'));

    for (const file of eventFiles) {
      const { default: event } = await import(`file://${path.join(eventsPath, file)}`);
      const eventName = path.parse(file).name;

      client[event.once ? 'once' : 'on'](eventName === 'interaction' ? 'interactionCreate' : eventName, (...args) => event.execute(...args));
      console.log(`✅ Loaded event: ${eventName}`);
    }
  } catch (error) {
    console.error(`❌ Failed to load events: ${error.message}`);
  }
}
