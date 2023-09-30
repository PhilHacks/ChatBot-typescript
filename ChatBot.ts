//Interface (defines the rules):
interface Command {
    execute(input: string): string;
}
  
//Command classes (implements the interface rules)
class HelpCommand implements Command{
    execute(input: string): string {
        return "Her is the help text"
    }
}

class GreetCommand implements Command{
    execute(input: string): string {
        return "Here is the greet text"
    }
}

class WeatherCommand implements Command{
    execute(input: string): string {
        return "Here is The weather: sunny and 25°C.";
    }
}



//ChatBot Class (uses command classes to execute commands) 
export class ChatBot {
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



  