let shopping_cart = [];
let response;
let Cart_number = document.querySelectorAll('.cart-items').length;
let counter = localStorage.getItem('counter');





function AddToCart(event) {
    let createA = document.createElement('a');
    response = event.target.value;
    shopping_cart.push(response);
    createA.setAttribute('onclick', 'DeleteElement()');
    createA.setAttribute('class', 'cart-items');
    createA.textContent = shopping_cart.at(-1);
    localStorage.setItem('value'+counter, event.target.value);
    counter++;
    localStorage.setItem('counter', counter)
}
let counterr = 0;
for (counter = 0; counter <= localStorage.length; counter++) {
    GetItems = localStorage.getItem('value' + counter);
    console.log(GetItems);
    CreateLi = document.createElement('li');
    CreateLi.textContent = GetItems;
    CreateLi.setAttribute('class', 'cart_content');
    document.getElementById('cart-content').appendChild(CreateLi);
}