// 1000
//console.log('Hello World!')

// 1001 
let a = parseInt(lines.shift()) 
let b = parseInt(lines.shift())
console.log(`X = ${a+b}`)

// 1002
const pi = 3.14159
const d = (pi*Math.pow(lines.shift(),2)).toFixed(4)
console.log('A='+d)

// 1003
const a = parseInt(lines.shift())
const b = parseInt(lines.shift())
console.log(`SOMA = `+(a+b))

// 1004
const a = parseInt(lines.shift())
const b = parseInt(lines.shift())
console.log(`PROD = `+(a*b))

// 1005
const a = parseFloat(lines.shift()).toFixed(1)
const b = parseFloat(lines.shift()).toFixed(1)
const media = ((a*35+b*75)/110).toFixed(5)
console.log('MEDIA = '+media)

// 1006
const a = parseFloat(lines.shift()).toFixed(1)
const b = parseFloat(lines.shift()).toFixed(1)
const c = parseFloat(lines.shift()).toFixed(1)
const media = ((a*2+b*3+c*5)/10).toFixed(1)
console.log('MEDIA = '+media)

// 1007
const a = parseInt(lines.shift())
const b = parseInt(lines.shift())
const c = parseInt(lines.shift())
const d = parseInt(lines.shift())
const diferenca = a*b-c*d
console.log('DIFERENCA = '+diferenca)

// 1008
const n = lines.shift()
const vh = parseInt(lines.shift())
const ht = parseFloat(lines.shift()).toFixed(2)
const s = (vh*ht).toFixed(2)
console.log(`NUMBER = ${n}\nSALARY = U$ ${s}`)

// 1009
const n = lines.shift()
const sf = parseFloat(lines.shift())
const v = parseFloat(lines.shift())
const s = sf+(v*0.15)
console.log('TOTAL = R$',s.toFixed(2)) 

// 1010
const p1 = lines.shift().split(' ')
const p2 = lines.shift().split(' ')
const v = (parseFloat(p1[1])*p1[2])+(parseFloat(p2[1])*p2[2])
console.log('VALOR A PAGAR: R$',v.toFixed(2))