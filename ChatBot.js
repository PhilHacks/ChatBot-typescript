"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatBot = void 0;
//Command classes (implements the interface rules)
class HelpCommand {
  execute(input) {
    return "Help text";
  }
}
//ChatBot Class (uses command classes to execute commands)
class ChatBot {
  executeCommand(command) {
    switch (command) {
      case "help":
        return "Here is the help text.";
      case "greet":
        return "Greet text.";
      case "weather":
        //logik för att hämta väder
        return "The weather is sunny with a high of 25°C.";
      default:
        return "Unknown command.";
    }
  }
}
exports.ChatBot = ChatBot;
