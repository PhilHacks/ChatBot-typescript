import { ChatBot } from "./ChatBot";
import readline from 'readline/promises';
import { stdin as input, stdout as output }  from 'process';

const chatBotInstance: ChatBot = new ChatBot();


async function main () {
    const rl = readline.createInterface({ input, output });

    while (true) {
        const command = await rl.question("Enter the commands 'help', 'greet', 'weather' or type 'exit' to quit:");

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