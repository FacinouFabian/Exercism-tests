import { reverse } from "dns"

import ReverseString from './reverse-string'

describe('reverse string test', () => {
    it('should return an empty string', () => {
        expect(ReverseString.reverse('')).toEqual('')
    })

    it('reverse string', () => {
        expect(ReverseString.reverse('gniqeK')).toEqual('Keqing')
    })

    it('reverse string 2', () => {
        expect(ReverseString.reverse('lhcsiF')).toEqual('Fischl')
    })

    it('reverse string 3', () => {
        expect(ReverseString.reverse('eelK')).toEqual('Klee')
    })
})