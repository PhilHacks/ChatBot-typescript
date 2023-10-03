"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatBot = void 0;
class HelpCommand {
    execute(input) {
        return "Here is the help text";
    }
}
class GreetCommand {
    execute(input) {
        return "Here is the greet text";
    }
}
class WeatherCommand {
    execute(input) {
        return "Here is The weather: Sunny and 25°C.";
    }
}
class ChatBot {
    constructor() {
        this.helpCommand = new HelpCommand();
        this.greetCommand = new GreetCommand();
        this.weatherCommand = new WeatherCommand();
    }
    executeCommand(command) {
        switch (command) {
            case "help":
                return this.helpCommand.execute(command);
            case "greet":
                return this.greetCommand.execute(command);
            case "weather":
                return this.weatherCommand.execute(command);
            default:
                return "Unknown command.";
        }
    }
}
exports.ChatBot = ChatBot;
