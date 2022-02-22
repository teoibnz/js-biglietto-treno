const percorsoInKm = prompt("Quanti Km devi percorrere?");
console.log("percorsoInKm");

const userAge = prompt("Quanti anni hai?");
console.log("userAge");

let priceBase = (0.21 * percorsoInKm);
console.log(priceBase);

if ((userAge > 18) || (userAge < 65)) {
    document.getElementById('full-price').innerHTML = priceBase;
};

const discountTeen = ((priceBase * 20) / 100);
console.log(discountTeen);

if (userAge < 18) {
    teenPrice = priceBase - discountTeen;
    document.getElementById("teen-price").innerHTML = teenPrice;
};

const discountOld = ((priceBase * 40) / 100);
console.log(discountOld);

if (userAge > 65) {
    oldPrice = priceBase - discountOld;
    document.getElementById("old-price").innerHTML = oldPrice;
};