class Color{
    private red: number
    private green: number
    private blue: number

    constructor(){
        this.red = 0
        this.green = 0
        this.blue = 0
    }

    rgb(red: number, green: number, blue: number): void{
        if(red < 0 || red > 255 || green < 0 || green > 255 || blue < 0 || blue > 255)
            console.error('Only values between 0 and 255')
        else{
            this.red = red
            this.green = green
            this.blue = blue
        }
    }

    getRGB(): string {
        return `rgb(${this.red}, ${this.green}, ${this.blue})`
    }

    getHEXA(): string{
        return `#${(this.red || '00').toString(16).toUpperCase()}${(this.green || '00').toString(16).toUpperCase()}${(this.blue || '00').toString(16).toUpperCase()}`
    }

    hexa(color: string){
        // if(color.length % 3 !== 0){
        //     return 0
        // }

        if(!!color.indexOf('#') === false){
            this.red = parseInt(color.substr(1,2), 16)
            this.green = parseInt(color.substr(3,2), 16)
            this.blue = parseInt(color.substr(5,2), 16)
        }
        else{
            this.red = parseInt(color.substr(0,2), 16)
            this.green = parseInt(color.substr(2,2), 16)
            this.blue = parseInt(color.substr(4,2), 16)
        }

        // console.log(!!color.indexOf('#')) 
        // console.log(color.replace('#',''))
        // const temp = color.replace('#','')
        // console.log(parseInt(temp.substr(0,2), 16))
        
        // console.log(parseInt(color, 16))
               
    }
}

export default Color