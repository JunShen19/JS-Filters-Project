import { products } from "./products.js";

// make a copy and assign to a new variable
let filteredProducts = [...products];
// console.log(filteredProducts);

// select .products-container
const productsContainer = document.querySelector(".products-container");

const displayProducts = () => {
  productsContainer.innerHTML = filteredProducts
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

//text filters
const form = document.querySelector(".input-form");
const searchInput = document.querySelector(".search-input");

form.addEventListener("keyup", () => {
  const inputValue = searchInput.value;
  filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(inputValue);
  });
  console.log(filteredProducts);

  displayProducts();
});
