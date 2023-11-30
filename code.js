//  Create a promise that will ask the user for both number 1 and number 2. The
// promise will check if the entry values were numbers, and then you will resolve
// it with an output similar to this: 3 + 7 = 10 otherwise, the rejection message
// will be both, or either 3 or 7 (is or are) not number(s).

let myPromise = new Promise( args )
function args(resolve, reject) {
    let numb1 = +prompt("Enter only a number")
    let numb2 = +prompt("Enter only a number")
    if(typeof numb1 == 'number'){
        resolve(` ${numb1 + numb2} is a number`)
        reject(`${numb1 + numb2}  is not a number`)
    }
}
myPromise.then(
    completed=> console.log(completed),
    rejected => console.log(rejected)
)









