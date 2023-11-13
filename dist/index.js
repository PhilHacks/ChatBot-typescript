"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ChatBot_1 = require("./ChatBot");
const promises_1 = __importDefault(require("readline/promises"));
const process_1 = require("process");
const chatBotInstance = new ChatBot_1.ChatBot();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const rl = promises_1.default.createInterface({ input: process_1.stdin, output: process_1.stdout });
        let isRunning = true;
        while (isRunning) {
            const command = yield rl.question("Enter the commands 'help', 'greet', 'weather' or type 'exit' to quit:");
            if (command.toLowerCase() === "exit") {
                console.log("Goodbye!");
                rl.close();
                isRunning = false;
            }
            const response = chatBotInstance.executeCommand(command);
            console.log(response);
        }
    });
}
main();
