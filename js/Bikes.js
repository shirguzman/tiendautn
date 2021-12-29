// Aqui comienza el Carrito de Compras
class Bikes {
    constructor(name, price, id) {
        this.name = name,
        this.price = price,
        this.id = id;
    }
}

// Instanciando la clase Bikes
const bikeOne = new Bikes("Remera Adidas talle L Negro", 95000, "1");
const bikeTwo = new Bikes("Zapatilla nike talle 42 azul", 15000, "2");
const bikeThree = new Bikes("Zapatilla Under Armor talle 45 gris/negro", 18000, "3");
const bikeFour = new Bikes("Remera Fila talle S blanco/rojo", 9000, "4");
const bikeFive = new Bikes("Campera Maraton Adidas talle M gris", 25000, "5");
const bikeSix = new Bikes("Campera Nike talle S rosa/azul", 14000, "6");
const bikeSeven = new Bikes("Remera Gucci tale XL blanco", 12000, "7");
const bikeEight = new Bikes("Campera Nike talle L blanco/verde", 20000, "8");

// const buttons = document.querySelectorAll("#buttonBike");
// buttons.forEach((item) => {
    //     item.addEventListener('click', () => addCart(Bikes));
    // });

document.getElementById("1").addEventListener('click', () => addCart(bikeOne));
document.getElementById("2").addEventListener('click', () => addCart(bikeTwo));
document.getElementById("3").addEventListener('click', () => addCart(bikeThree));
document.getElementById("4").addEventListener('click', () => addCart(bikeFour));
document.getElementById("5").addEventListener('click', () => addCart(bikeFive));
document.getElementById("6").addEventListener('click', () => addCart(bikeSix));
document.getElementById("7").addEventListener('click', () => addCart(bikeSeven));
document.getElementById("8").addEventListener('click', () => addCart(bikeEight));

const buttonRemove1 = document.getElementById("deleteButton1").addEventListener('click', () => removeCart(bikeOne));
const buttonRemove2 = document.getElementById("deleteButton2").addEventListener('click', () => removeCart(bikeTwo));
const buttonRemove3 = document.getElementById("deleteButton3").addEventListener('click', () => removeCart(bikeThree));
const buttonRemove4 = document.getElementById("deleteButton4").addEventListener('click', () => removeCart(bikeFour));
const buttonRemove5 = document.getElementById("deleteButton5").addEventListener('click', () => removeCart(bikeFive));
const buttonRemove6 = document.getElementById("deleteButton6").addEventListener('click', () => removeCart(bikeSix));
const buttonRemove7 = document.getElementById("deleteButton7").addEventListener('click', () => removeCart(bikeSeven));
const buttonRemove8 = document.getElementById("deleteButton8").addEventListener('click', () => removeCart(bikeEight));

// document.getElementById("viewTotal").addEventListener('click', () => cartPrice());
document.getElementById("deleteAll").addEventListener('click', () => removeAll());

const cart = [];
const nameContainer = document.getElementById("nameProduct");
const quantityContainer = document.getElementById("quantityProduct");
const priceContainer = document.getElementById("priceProduct");

function addCart(bike) {
    cart.push(bike);
    localStorage.setItem('key', JSON.stringify(cart));
    document.getElementById("numberCart").textContent = cart.length;

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

function getLocalStorage() {
    let bike;

    if(localStorage.getItem('key') === null) {
        bike = [];
    }else {
        bike = JSON.parse(localStorage.getItem('key'));
    }
    return bike;
}


function removeCart(bike) {
    // const removeCol1 = document.getElementById("quantityChild");
    // const removeCol2 = document.getElementById("nameChild");
    // const removeCol3 = document.getElementById("priceChild");

    let result = cart.indexOf(bike);
    cart.splice(result, result);
}


function cartPrice() {
    let total = 0;
    for(let i = 0; i < cart.length; i++) {
        total += cart[i].price;
    }
    const success = document.getElementById("total")
    success.textContent = `$${total}`;
    // setTimeout(() => success.textContent = "", 2500);
}

function removeAll() {
    cart = [];
    nameContainer.innerText = ""
    priceContainer.innerText = ""
    quantityContainer.innerText = ""
    document.getElementById("total").innerText = "";
}
