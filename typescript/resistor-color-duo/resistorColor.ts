enum Values {
    blue = '6',
    brown = '2',
    grey = '8'
}

type Color = keyof typeof Values

class ResistorColor {
    colors: Color[]

    constructor(colors: Color[]) {
        this.colors = colors
    }

    value(): number {
        const colors = this.colors
        let str: string = ''
        if (colors.length === 2) {
            for (const color of colors) {
                str += Values[color]
            }
        } else {
            str = Values[colors[0]]
        }

        return parseInt(str)
    }
}

export default ResistorColor