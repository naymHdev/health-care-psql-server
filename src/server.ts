import chalk from "chalk";
import app from "./app";
import { Server } from "http";

const port = 8000;

async function main() {
  const server: Server = app.listen(port, () => {
    console.log(chalk.green(`http://localhost:${port}`));
    console.log(
      chalk.yellow("Health Care Server is ready to handle requests 🚀"),
    );
  });
}

main();