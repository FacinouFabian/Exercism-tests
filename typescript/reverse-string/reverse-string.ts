class ReverseString {
    static reverse(str: string): string {
        const splitStr = str.split('')
        let word = ''

        for (let i = 0; i <= splitStr.length; i++) {
            if (splitStr[splitStr.length - i] != undefined) {
                word += splitStr[splitStr.length - i]
            }
        }

        return word
    }
}

export default ReverseString