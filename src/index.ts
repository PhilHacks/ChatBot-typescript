import { ChatBot } from "./ChatBot";
import readline from 'readline/promises';
import { stdin as input, stdout as output }  from 'process';

const chatBotInstance: ChatBot = new ChatBot();


async function main () {
    const rl = readline.createInterface({ input, output });

    let isRunning = true;
    while (isRunning) {
        try {
            const command = await rl.question(
                "Enter the commands 'help', 'greet', 'weather' or type 'exit' to quit:"
            );
    
            if (command.toLowerCase()=== "exit") {
                console.log("Goodbye!");
                rl.close();
                isRunning = false
            } else {
                const response = chatBotInstance.executeCommand(command);
                console.log(response);
            }
        } catch (error) {
          console.error("An error occured:", error);  
        }
          
    }
}

main();