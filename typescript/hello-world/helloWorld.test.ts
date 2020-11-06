import HelloWorld from './helloWorld'

describe('hello world test', () => {
    it('should display hello world to the console', () => {
        const consoleSpy = jest.spyOn(console, 'log')
        const helloSpy = jest.spyOn(HelloWorld.prototype, 'hello')
        const helloworld = new HelloWorld()
        helloworld.hello()
        expect(helloSpy).toHaveBeenCalledTimes(1)
        expect(consoleSpy).toHaveBeenCalledWith('hello')

        consoleSpy.mockClear()
        helloSpy.mockClear()
    })
})