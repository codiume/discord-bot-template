import events from '../events';

export const loadEvents = client => {
  for (const event of events) {
    if (event.once) {
      client.once(event.name, event.execute);
    } else {
      client.on(event.name, event.execute);
    }
  }
};
