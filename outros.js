const lines = ['7 21 -14']
//1042
let v = lines.shift().split(" ")
v[0]=parseInt(v[0])
v[1]=parseInt(v[1])
v[2]=parseInt(v[2])

v.sort(function(a,b){return a-b})
console.log(`${v[0]}\n${v[1]}\n${v[2]}\n`)
v.sort(function(a,b){return b-a})
console.log(`${v[0]}\n${v[1]}\n${v[2]}`)