import chalk from 'chalk';

export const ready = {
  name: 'ready',
  once: true,
  execute(client) {
    console.log(
      chalk.bgBlueBright.black(
        ` Successfully logged in as: ${client.user.tag} `
      )
    );
  }
};

export default ready;
