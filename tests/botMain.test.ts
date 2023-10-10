import { HelpCommand, GreetCommand, WeatherCommand } from '../src/ChatBot';


describe('Help command', () => {
    it('should return a string with a help text', () => {
        const help = new HelpCommand();
        const result = help.execute(" ");
        expect(result).toContain("Here is the help text")
    });
});


describe('Greet command', () => {
    it('should return a string with a greet text', () => {
        const greet = new GreetCommand();
        const result = greet.execute(" ");
        expect(result).toContain("Here is the greet text")
    });
});



describe('Weather command', () => {
    it('should return a string with weather information', () => {
        const weather = new WeatherCommand();
        const result = weather.execute(" ");
        expect(result).toContain("Here is The weather: Sunny and 25°C.");
    });
});