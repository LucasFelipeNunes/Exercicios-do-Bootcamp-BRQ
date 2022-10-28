console.log("EXERCÍCIO 3:\n")
let A = [true, false, true, true, false], B = [true, true, false, true, true], C = [false, false, true, true, true]
console.log("a)\n\tA\tB\tC\tA e B ou C")
for(let i = 0;i < 5;i++){
    console.log(((A) ? "\tV\t" : "\tF\t") + ((B) ? "V\t" : "F\t") + ((C) ? "V\t" : "F\t") + ((A && B || C) ? "V" : "F"))
}
A = [true, true, false, true]
B = [true, false, true, true]
C = [false, false, false, true]
console.log("\nb)\n\tA\tB\tC\tA e B e C")
for(let i = 0;i < 4;i++){
    console.log(((A) ? "\tV\t" : "\tF\t") + ((B) ? "V\t" : "F\t") + ((C) ? "V\t" : "F\t") + ((A && B && C) ? "V" : "F"))
}
A = [true, true, true, true]
B = [true, true, false, false]
C = [true, false, false, true]
console.log("\nc)\n\tA\tB\tC\tA e B ou C")
for(let i = 0;i < 4;i++){
    console.log(((A) ? "\tV\t" : "\tF\t") + ((B) ? "V\t" : "F\t") + ((C) ? "V\t" : "F\t") + ((A || B && C) ? "V" : "F"))
}