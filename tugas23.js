// Buatlah filter deret bilangan [32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66]
//dengan ketentuan angka lebih besar dari 15 

let bilangan = [32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66];

let deretan = bilangan.filter(bilangan =>{
    return bilangan>15
})
console.log(deretan)
