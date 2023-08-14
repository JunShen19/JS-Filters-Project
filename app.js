import { products } from "./products.js";

// make a copy and assign to a new variable
let filteredProducts = [...products];
console.log(filteredProducts);

// select .products-container
const productsContainer = document.querySelector(".products-container");

const displayProducts = () => {
  productsContainer.innerHTML = products
    .map((product) => {
      return `<article class="product" id=${product.id}>
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
    })
    .join("");
};

displayProducts();
