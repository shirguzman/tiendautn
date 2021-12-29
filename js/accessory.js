// Seccion de Accesorios
class Accessories {
    constructor(name, price) {
        this.name = name,
        this.price = price;
    }
}

// Instanciando la Clase Accessories
const accessory1 = new Accessories("Casco Giro", 14000);
const accessory2 = new Accessories("Casco Bell Crest-R", 15000);
const accessory3 = new Accessories("Casco Lazer Chiru", 9800);
const accessory4 = new Accessories("Candado Linga OnGuard", 8000);
const accessory5 = new Accessories("Cadena Kyptonite", 8100);
const accessory6 = new Accessories("Cadena U-Lock Kryptonite", 11000);
const accessory7 = new Accessories("Asiento Niño Sport", 3000);
const accessory8 = new Accessories("Asiento Antiprostatico MGM", 4500);

const buttonAccessory1 = document.getElementById("10").addEventListener('click',() => addCartAccessories(accessory1));
const buttonAccessory2 = document.getElementById("20").addEventListener('click',() => addCartAccessories(accessory2));
const buttonAccessory3 = document.getElementById("30").addEventListener('click',() => addCartAccessories(accessory3));
const buttonAccessory4 = document.getElementById("40").addEventListener('click',() => addCartAccessories(accessory4));
const buttonAccessory5 = document.getElementById("50").addEventListener('click',() => addCartAccessories(accessory5));
const buttonAccessory6 = document.getElementById("60").addEventListener('click',() => addCartAccessories(accessory6));
const buttonAccessory7 = document.getElementById("70").addEventListener('click',() => addCartAccessories(accessory7));
const buttonAccessory8 = document.getElementById("80").addEventListener('click',() => addCartAccessories(accessory8));

const cartAccessories = [];

function addCartAccessories({name, price}) {
    cartAccessories.push(price);
    localStorage.setItem('key', JSON.stringify(cartAccessories));
    document.getElementById("numberCart").textContent = cartAccessories.length;
    const quantityChild = document.createElement('tr');
    quantityChild.setAttribute("id", "quantityChild");
    quantityChild.innerHTML = `
    <th class="length">
    ${cart.length}
    </th>`
    quantityContainer.appendChild(quantityChild);

    const nameChild = document.createElement("tr");
    nameChild.setAttribute("id", "nameChild");
    nameChild.innerHTML = `
    <td class="name">
    ${bike.name}
    </td`
    nameContainer.appendChild(nameChild);

    const priceChild = document.createElement("tr");
    priceChild.setAttribute("id", "priceChild");
    priceChild.innerHTML = `
    <td class="price">
    $${bike.price}
    </td `
    priceContainer.appendChild(priceChild);
    cartPrice();
}

function cartRemoveAccessories() {
    let result = cartAccessories.indexOf(price);
    cartAccessories.splice(result, result);
}