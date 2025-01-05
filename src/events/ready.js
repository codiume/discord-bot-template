export default {
  once: true,
  execute(client) {
    console.log(`Logged in as ${client.user.tag}`);
  }
};
