import { products } from "./products.js";

console.log(products);
// make a copy and assign to a new variable
let product = [...products];
console.log(product);

// select .products-container
const productsContainer = document.querySelector(".products-container");
console.log(productsContainer);

const displayProducts = (products) => {
  const productHtml = products.map((product) => {
    return `<article class="product">
          <img
            src=${product.image}
            class="product-img img"
          />
          <footer>
            <h5 class="product-name">${product.title}</h5>
            <span class="product-price">$${product.price}/span>
          </footer>
        </article>
    `;
  });
  return productHtml.join("");
};

const productHtml = displayProducts(product);
productsContainer.innerHTML = productHtml;
