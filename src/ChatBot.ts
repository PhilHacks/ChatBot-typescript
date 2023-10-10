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
    private helpCommand = new HelpCommand();
    private greetCommand = new GreetCommand();
    private weatherCommand = new WeatherCommand();

    executeCommand(command: string): string {
        switch(command) {
            case "help": return this.helpCommand.execute(command);
            case "greet": return this.greetCommand.execute(command);
            case "weather": return this.weatherCommand.execute(command);
            default: return "Unknown command";
        }
    }
}