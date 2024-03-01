// the "products" matches the webconfig remotes key 'products'
import { mount } from 'products/ProductsIndex';
import 'cart/CartShow';

console.log("Container!");

mount(document.querySelector('#my-products'));