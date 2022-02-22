const percorsoInKm = prompt("Quanti Km devi percorrere?");
console.log("percorsoInKm");

const userAge = prompt("Quanti anni hai?");
console.log("userAge");

let priceBase = (0,21 * percorsoInKm);
document.getElementById("full-price").innerHTML = priceBase;
console.log(priceBase);

const discountTeen = ((priceBase * 20) / 100);
console.log(discountTeen);

const discountOld = ((priceBase * 40) / 100);
console.log(discountOld);


if (userAge < 18) {
    priceBase - discountTeen;
}
else if (userAge > 65) {
    priceBase - discountOld;
}