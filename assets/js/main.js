console.log("huhu");
// lvl_1_1

let pi = Math.PI;
// console.log(pi);
let roundedPi = pi.toFixed(2)
// console.log(roundedPi);


// lvl_1_2
let array = [
    3.14,
    193.4464,
    0.8596433607,
    -2.940629089,
];

const roundNum = () => {
    array.forEach(element => {
        // console.log(Math.round(element));
    });
}
roundNum()


// lvl_1_3
let randomNum = Math.random();
// console.log(randomNum);

let randomNum1_10 = (Math.random() * 11);
// console.log(Math.ceil(randomNum1_10));

let randomNum1_100 = (Math.random() * 101);
// console.log(Math.ceil(randomNum1_100));


// lvl_2_1
const roundTo = (num, kommastellen) => {
    let result = num.toFixed(kommastellen)
    return result
}
// console.log(roundTo(3.1415926535, 5))

// lvl_2_2
let sign = window.prompt("Suche eine Nummer zwischen 1 und 10");

let randomNumber1_10 = (Math.random() * 11);
randomNumber1_10.toFixed

if (Number(sign) === Math.floor(randomNumber1_10)) {
    console.log("Du hast die Zahl richtig erraten.");
} else {
    console.log("Du hast verloren. " + "Die generierte Zahl war " + Math.floor(randomNumber1_10))
};

