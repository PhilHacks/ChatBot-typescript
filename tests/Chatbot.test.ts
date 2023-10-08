import { HelpCommand } from '../src/ChatBot';


describe('Helpcommand', () => {
it('should return a string with a help text', () => {
    const command = new HelpCommand();
    const result = command.execute("some input");
    expect(result).toContain("Here is the help text")
});

});