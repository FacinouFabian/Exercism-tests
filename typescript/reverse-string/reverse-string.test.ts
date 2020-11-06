import { reverse } from "dns"

import ReverseString from './reverse-string'

describe('reverse string test', () => {
    it('should return an empty string', () => {
        expect(ReverseString.reverse('')).toEqual('')
    })

    it('reverse string gniqeK', () => {
        expect(ReverseString.reverse('gniqeK')).toEqual('Keqing')
    })

    it('reverse string lhcsiF', () => {
        expect(ReverseString.reverse('lhcsiF')).toEqual('Fischl')
    })

    it('reverse string eelK', () => {
        expect(ReverseString.reverse('eelK')).toEqual('Klee')
    })
})