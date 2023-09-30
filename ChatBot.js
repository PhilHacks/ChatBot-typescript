"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatBot = void 0;
//ChatBot Class.
class ChatBot {
  constructor() {}
  //Methods for commands:
  executeCommand(command) {
    switch (command) {
      case "help":
        return "Here is the help text.";
      default:
        return "Unknown command.";
    }
  }
}
exports.ChatBot = ChatBot;

//Test
