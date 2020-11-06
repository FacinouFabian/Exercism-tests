import TwoFer from './two-fer'

describe('TwoFer class test', () => {
    it('should display the message if no parameter is given', () => {
        const twoFerSpy = jest.spyOn(TwoFer, 'twoFer')
        TwoFer.twoFer()
        expect(twoFerSpy).toHaveBeenCalledTimes(1)
        expect(TwoFer.twoFer()).toEqual('One for you, one for me.')
        expect(TwoFer.twoFer('Fabian')).toEqual('One for Fabian, one for me.')
        twoFerSpy.mockClear()
    })
})