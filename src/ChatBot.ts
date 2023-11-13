interface Command {
    execute(input: string): string;
}


//Cmd class (implement interface rules)
export class HelpCommand implements Command {
    execute(input: string): string {
        return "Here is the help text";
    }
}


export class GreetCommand implements Command {
    execute(input: string): string {
        return "Here is the greet text";
    }
}

export class WeatherCommand implements Command {
    execute(input: string): string {
        return "Here is The weather: Sunny and 25°C.";
    }
}


//Chatbot Class (uses cmd class to execute cmd)
export class ChatBot {
    private commandMap = new Map<string, Command>();

    constructor() {
        this.commandMap.set("help", new HelpCommand());
        this.commandMap.set("greet", new GreetCommand());
        this.commandMap.set("weather",new WeatherCommand());
    }
   
    executeCommand(command: string): string {
        const selectedCommand = this.commandMap.get(command);
        if(selectedCommand) {
            return selectedCommand.execute(command); 
        }
        return "Unknown command";
    }
}