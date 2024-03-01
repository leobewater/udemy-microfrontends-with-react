import faker from "faker";

// make this dynamic with the element in order to suit for both situations below
const mount = (el) => {
  let products = "";

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;
};

// Context/Situation #1
// We are running this file in development in isolation
// We are using our local index.html file
// Which DEFINITELY has an element with an id of "dev-product"
// We want to immediately render our app into that element
if (process.env.NODE_ENV === "development") {
  // check if running "products" in isolation by check an element in the products index.html
  const el = document.querySelector("#dev-products");
  // Assuming our CONTAINER doesn't have an element with this id
  if (el) {
    // We are probably running in isolation
    mount(el);
  }
}

// Context/Situation #2
// We are running this file in development or production through the CONTAINER app
// NO GUARANTEE that an element with an id of 'dev-products' exists
// We DO NOT WANT to try to immediately render the app
export { mount };
