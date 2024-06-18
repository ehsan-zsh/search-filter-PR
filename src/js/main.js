import products from "./api.js";

const listMenu = [document.querySelector("#listItems")];
const listProducts = document.querySelector("#listProducts");

function showAllProducts() {
  let allProducts = "";
  products.map((elem) => {
    allProducts += `
        <div class="flex flex-col items-center bg-gray-100 shadow-sm p-3 rounded gap-4">
          <img class="transition-all hover:brightness-75 cursor-pointer rounded object-cover w-full h-full" src="../photos/img/${elem.src}" alt="product">
          <p> ${elem.biography} </p>
          <span class="text-green-500"> ${elem.price}</span>
        </div>
      `;
  });
  listProducts.innerHTML = allProducts;
}

showAllProducts();

listMenu.forEach((e) => {
  e.addEventListener("click", (elem) => {
    const getAttribute = elem.target.dataset.category;
    const filteredProducts = products.filter(
      (elem) => elem.category === getAttribute
    );
    let selectProducts = "";
    filteredProducts.map((product) => {
      selectProducts += `
        <div class="flex flex-col items-center bg-gray-100 shadow-sm p-3 rounded gap-4">
          <img class="transition-all hover:brightness-75 cursor-pointer rounded object-cover w-full h-full" src="../photos/img/${product.src}" alt="product">
          <p> ${product.biography} </p>
          <span class="text-green-500"> ${product.price}</span>
        </div>
        `;
      listProducts.innerHTML = selectProducts;
    });

    if (getAttribute == "all") {
      showAllProducts();
    }
  });
});
