const lines = ['12.7 10.4 15.2']
// 1011
const pi = 3.14159
const r = parseFloat(lines.shift())
const v = (4/3)*pi*Math.pow(r,3) 
console.log('VOLUME =',v.toFixed(3))

// 1012
const pi = 3.14159
const n = lines.shift().split(' ')
const a  = parseFloat(n[0])
const b  = parseFloat(n[1])
const c  = parseFloat(n[2])

const areaTri = ((a*c)/2).toFixed(3)
const areaC = (pi*Math.pow(c,2)).toFixed(3)
const areaTra = (((a+b)*c)/2).toFixed(3)
const areaQ = (b*b).toFixed(3)
const areaR = (a*b).toFixed(3)

console.log(`TRIANGULO: ${areaTri}\nCIRCULO: ${areaC}\nTRAPEZIO: ${areaTra}\nQUADRADO: ${areaQ}\nRETANGULO: ${areaR}`)