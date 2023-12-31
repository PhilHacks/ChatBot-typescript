import { HelpCommand, GreetCommand, WeatherCommand, ChatBot } from '../src/ChatBot';


describe('Individual Command Classes', () => {
    
    describe('Help command', () => {
        it('should return a string with a help text', () => {
            const help = new HelpCommand();
            const result = help.execute("Help");
            expect(result).toContain("Here is the help text")
        });
    });

    describe('Greet command', () => {
        it('should return a string with a greet text', () => {
            const greet = new GreetCommand();
            const result = greet.execute("Greet");
            expect(result).toContain("Here is the greet text")
        });
    });

    describe('Weather command', () => {
        it('should return a string with weather information', () => {
            const weather = new WeatherCommand();
            const result = weather.execute("Weather");
            expect(result).toContain("Here is The weather: Sunny and 25°C.");
        });
    });
});

describe('Unknown commands', () => {
    it('should return a string "unknown command"', () => {
        const bot = new ChatBot();
        const result = bot.executeCommand("non_existent_command");
        expect(result).toBe("Unknown command");
    })
})

describe('Execute Command metod', () => {
    let bot: ChatBot;

    beforeEach (() => {
        bot = new ChatBot();
    });

    it('should return a string with the help text when "help" command is invoked', () => {
        const result = bot.executeCommand("help");
        expect(result).toContain("Here is the help text");
    })

    it('should return a string with the greet text when "greet" command is invoked', () => {
        const result = bot.executeCommand("greet");
        expect(result).toContain("Here is the greet text");
    })

    it('should return a string with the weather when "weather" command is invoked', () => {
        const result = bot.executeCommand("weather");
        expect(result).toContain("Here is The weather: Sunny and 25°C.");
    })

    it('should return "Unknown command" for non-existent commands', () => {
        const result = bot.executeCommand("non_existent_command");
        expect(result).toBe("Unknown command");
    })
})


describe('Edge cases', () => {
    let bot: ChatBot;

    beforeEach (() => {
        bot = new ChatBot();
    });
    
    it('should return "unknown command" when a undefined command is provided', () => {
        const result = bot.executeCommand(undefined as any);
        expect(result).toBe("Unknown command");
    })

    it('should return "unknown command" when a malformed command is provided', () => {
        const result = bot.executeCommand("gr@@t");
        expect(result).toBe("Unknown command");
    })
})
