import { HelpCommand, GreetCommand, WeatherCommand, ChatBot } from '../src/ChatBot';


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



describe('Unknown commands', () => {
    it('should return a string "unknown command"', () => {
        const bot = new ChatBot();
        const result = bot.executeCommand("non_existent_command");
        expect(result).toBe("Unknown command.");
    })
})
