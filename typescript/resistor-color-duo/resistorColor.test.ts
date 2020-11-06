import ResistorColor from './resistorColor'

describe('resistor color test', () => {
    it('Blue and Grey', () => {
        const resistor = new ResistorColor(['blue', 'grey'])
        expect(resistor.value()).toEqual(68)
    })

    it('Brown and Grey', () => {
        const resistor = new ResistorColor(['brown', 'grey'])
        expect(resistor.value()).toEqual(28)
    })
})