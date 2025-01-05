export default {
  once: false,
  async execute(interaction) {
    if (!interaction.isCommand()) return;

    const command = interaction.client.commands.get(interaction.commandName);

    if (!command) {
      console.warn(`⚠️ Command not found: ${interaction.commandName}`);
      return;
    }

    try {
      await command.execute(interaction);
    } catch (error) {
      console.error(`❌ Error executing command: ${error.message}`);
      await interaction.reply({ content: 'There was an error executing this command!', ephemeral: true });
    }
  }
};
