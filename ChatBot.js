"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatBot = void 0;
class HelpCommand {
  execute(input) {
    return "Help text";
  }
}
class ChatBot {
  executeCommand(command) {
    switch (command) {
      case "help":
        return "Here is the help text.";
      case "greet":
        return "Greet text.";
      case "weather":
        return "The weather is sunny with a high of 25°C.";
      default:
        return "Unknown command.";
    }
  }
}
exports.ChatBot = ChatBot;
