//import data from './shopping_cart.postman_collection.json';
import data from "./shopping_cart.postman_collection.json" assert { type: "json" };

document.getElementById('main').innerHTML = JSON.stringify(data, null, 4);

console.log(JSON.stringify(data, null, 4))