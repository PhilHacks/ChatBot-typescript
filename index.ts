const ChatBot = require('./ChatBot').ChatBot;
const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

const chatBotInstance = new ChatBot();


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