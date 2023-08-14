import { products } from "./products.js";

// make a copy and assign to a new variable
let filteredProducts = [...products];
// console.log(filteredProducts);

// select .products-container
const productsContainer = document.querySelector(".products-container");

const displayProducts = () => {
  if (filteredProducts.length < 1) {
    // console.log(filteredProducts);
    productsContainer.innerHTML = `<h1>Sorry, we don't have such that products</h1>`;
    // return;
  } else {
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
  }
};

displayProducts();

// Text filters
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

// Filter Buttons
const companiesDOM = document.querySelector(".companies");

const displayButtons = () => {
  const buttons = [
    "all",
    ...new Set(products.map((product) => product.company)),
  ];
  console.log(buttons);
  companiesDOM.innerHTML = buttons
    .map((company) => {
      // data-XXX -> we can find it from el.dataset.XXX
      return `<button class='company-btn' data-id=${company}>${company}</button>`;
    })
    .join("");
};

displayButtons();

companiesDOM.addEventListener("click", (event) => {
  console.log(event.target);
  const el = event.target;
  if (el.classList.contains("company-btn")) {
    if (el.dataset.id === "all") {
      filteredProducts = [...products];
    } else {
      filteredProducts = products.filter((product) => {
        return product.company === el.dataset.id;
      });
    }

    searchInput.value = "";
    displayProducts();
  }
});
