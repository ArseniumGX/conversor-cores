import assert from 'assert'
import Color from '../src/Colors'

const cor = new Color()



describe('Deve testar os métodos ca classe Color', () => {
    describe('Conversão para Hexadecimal', () => {
        const vermelho = "#FF0000"
        const verde = "#00FF00"
        const azul = "#0000FF"
        
        it('Vermelho', () => {
            cor.rgb(255,0,0)
            assert.deepStrictEqual(vermelho, cor.getHEXA())
        })
        it('Vermelho', () => {
            cor.rgb(0,255,0)
            assert.deepStrictEqual(verde, cor.getHEXA())
        })
        it('Azul', () => {
            cor.rgb(0,0,255)
            assert.deepStrictEqual(azul, cor.getHEXA())
        })
    })

    describe('Conversão para RBG', () => {
        const vermelho = "rgb(255, 0, 0)"
        const verde = "rgb(0, 255, 0)"
        const azul = "rgb(0, 0, 255)"

        it('Vermelho', () => {
            cor.hexa("FF0000")
            assert.deepStrictEqual(vermelho, cor.getRGB())
        })
        
        it('Verde', () => {
            cor.hexa("#00FF00")
            assert.deepStrictEqual(verde, cor.getRGB())
        })
        
        it('azul', () => {
            cor.hexa("0000FF")
            assert.deepStrictEqual(azul, cor.getRGB())
        })
    })
})