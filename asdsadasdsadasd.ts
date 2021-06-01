let p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?')

let arr1 = ["fox", "dog"]
let arr2 = ["monkey", "birka"]


for (let notation of arr1){
    let replacer = arr1.indexOf(notation)
    let regex = new RegExp(notation, "gi")
    let i = p.match(regex)
    console.log(i)
    for (let asd of i) {
        p = p.replace(asd, arr2[replacer])
    }
}



