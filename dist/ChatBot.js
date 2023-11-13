"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatBot = exports.WeatherCommand = exports.GreetCommand = exports.HelpCommand = void 0;
class HelpCommand {
    execute(input) {
        return "Here is the help text";
    }
}
exports.HelpCommand = HelpCommand;
class GreetCommand {
    execute(input) {
        return "Here is the greet text";
    }
}
exports.GreetCommand = GreetCommand;
class WeatherCommand {
    execute(input) {
        return "Here is The weather: Sunny and 25°C.";
    }
}
exports.WeatherCommand = WeatherCommand;
class ChatBot {
    constructor() {
        this.commandMap = new Map();
        this.commandMap.set("help", new HelpCommand());
        this.commandMap.set("greet", new GreetCommand());
        this.commandMap.set("weather", new WeatherCommand());
    }
    executeCommand(command) {
        const selectedCommand = this.commandMap.get(command);
        if (selectedCommand) {
            return selectedCommand.execute(command);
        }
        return "Unknown command";
    }
}
exports.ChatBot = ChatBot;
