"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
const ChatBot = require("./ChatBot").ChatBot;
const readline = require("readline/promises");
const { stdin: input, stdout: output } = require("process");
const chatBotInstance = new ChatBot();
const rl = readline.createInterface({ input, output });
function main() {
  return __awaiter(this, void 0, void 0, function* () {
    const rl = readline.createInterface({ input, output });
    while (true) {
      const command = yield rl.question(
        "Enter the commands 'Help', 'Greet', 'Weather' or type 'exit' to quit:"
      );
      if (command.toLowerCase() === "exit") {
        console.log("Goodbye!");
        rl.close();
        break;
      }
      const response = chatBotInstance.executeCommand(command);
      console.log(response);
    }
  });
}
main();
