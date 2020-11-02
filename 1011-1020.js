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

// 1013
const n = lines.shift().split(" ")
maior = Math.max(n[0],n[1],n[2])
console.log(maior+' eh o maior')

// 1014
const d = parseFloat(lines.shift())
const g = parseFloat(lines.shift())
const consumo = (d/g).toFixed(3)
console.log(consumo+' km/l')

// 1015
const p1 = lines.shift().split(" ")
const p2 = lines.shift().split(" ")
const x1 = parseFloat(p1[0])
const y1 = parseFloat(p1[1])
const x2 = parseFloat(p2[0])
const y2 = parseFloat(p2[1])
d = Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2)).toFixed(4)
console.log(d)

// 1016
console.log(lines.shift()*2+' minutos')

// 1017
const h = parseFloat(lines.shift())
const v = parseFloat(lines.shift())
const g = ((h*v)/12).toFixed(3)
console.log(g)

// 1018
let v = lines.shift()
const cedulas = [100,50,20,10,5,2,1]
let q = [0,0,0,0,0,0,0]
console.log(v)
for(i=0;i<7;i++){
    while(v>=cedulas[i]){
        v-=parseInt(cedulas[i])
        q[i]+=1
    }
    console.log(`${q[i]} nota(s) de R$ ${cedulas[i]},00`)
}

// 1019
let t = lines.shift()
const ts = [3600,60,1]
let ct = [0,0,0]
for(i=0;i<3;i++){
    while(t>=ts[i]){
        t-=ts[i]
        ct[i]+=1
    }
}
console.log(ct[0]+':'+ct[1]+':'+ct[2])

// 1020
let d = lines.shift()
const v = [365,30,1]
let q = [0,0,0]
for(i=0;i<3;i++){
    while(d>=v[i]){
        d-=parseInt(v[i])
        q[i]+=1
    }
}
console.log(`${q[0]} ano(s)\n${q[1]} mes(es)\n${q[2]} dia(s)`)