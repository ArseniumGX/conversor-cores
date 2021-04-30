import express from 'express'
import Color from './Colors'

const app = express()
app.use(express.json())

const cor = new Color()
cor.hexa("#FF231A")

console.info("#FF231A")
console.log(cor.getRGB())
console.log(cor.getHEXA())


app.listen(3333)