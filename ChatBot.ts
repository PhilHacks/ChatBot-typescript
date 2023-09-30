  //Interface:
  interface Command {
    execute(input: string): string;
  }
  
  //ChatBot Class. 
  export class ChatBot {
    constructor(){

    }

    //Methods for commands: 
    executeCommand(command: string): string {
        switch(command) {
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



  