console.log("EXERCÍCIO 3:\n")
let E = [true, false, true, true, false], F = [true, true, false, true, true], G = [false, false, true, true, true]
console.log("a)\n\tE\tF\tG\tE e F ou G")
for(let i = 0;i < 5;i++){
    console.log(((E) ? "\tV\t" : "\tF\t") + ((F) ? "V\t" : "F\t") + ((C) ? "V\t" : "F\t") + ((E && F || G) ? "V" : "F"))
}
E = [true, true, false, true]
F = [true, false, true, true]
G = [false, false, false, true]
console.log("\nb)\n\tE\tF\tG\tE e F e G")
for(let i = 0;i < 4;i++){
    console.log(((E) ? "\tV\t" : "\tF\t") + ((F) ? "V\t" : "F\t") + ((C) ? "V\t" : "F\t") + ((E && F && G) ? "V" : "F"))
}
E = [true, true, true, true]
F = [true, true, false, false]
G = [true, false, false, true]
console.log("\nc)\n\tE\tF\tG\tE e F ou G")
for(let i = 0;i < 4;i++){
    console.log(((E) ? "\tV\t" : "\tF\t") + ((F) ? "V\t" : "F\t") + ((C) ? "V\t" : "F\t") + ((E || F && G) ? "V" : "F"))
}