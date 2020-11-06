const format = (digits: string): number[] => {
    const result: number[] = []
    const split = digits.split('')

    for (const digit of split) {
        result.push(parseInt(digit))
    }

    return result
}

class series {
    digits: number[] = []

    constructor(digits: string) {
        this.digits = format(digits)
    }

    group(number: number) {
        const digitsAr: Array<number[]> = []

        for (const digit of this.digits) {
            if (number === 1) {
                digitsAr.push([digit])
            } else {

            }
        }

        return digitsAr

    }
}

export default series