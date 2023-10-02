//Interface (defines the rules):
interface Command {
    execute(input: string): string;
}
  
//Command classes (implements the interface rules)
class HelpCommand implements Command{
    execute(input: string): string {
        return "Here is the help text"
    }
}

class GreetCommand implements Command{
    execute(input: string): string {
        return "Here is the greet text"
    }
}

class WeatherCommand implements Command{
    execute(input: string): string {
        return "Here is The weather sunny and 25°C.";
    }
}



//ChatBot Class (uses command classes to execute commands) 
export class ChatBot {
    private helpCommand = new HelpCommand();
    private greetCommand = new GreetCommand();
    private weatherCommand = new WeatherCommand();

    executeCommand(command: string): string {
        switch(command) {
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
