import { ChatBot } from "./ChatBot";

import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';


const chatBotInstance = new ChatBot();

const rl = readline.createInterface({ input, output });


async function main () {
    const rl = readline.createInterface({ input, output });

    while (true) {
        const command = await rl.question("Enter the commands 'Help', 'Greet', 'Weather' or type 'exit' to quit:");

        if (command.toLowerCase()=== "exit") {
            console.log("Goodbye!");
            rl.close();
            break;
        }

        const response = chatBotInstance.executeCommand(command);
        console.log(response);
    }

}

main();