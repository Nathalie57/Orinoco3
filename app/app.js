let config = {
  server: "localhost:3000/api/teddies/"
}

var orinoco = {
  pages: []
};
new DataManager(config.server);
new Cart({ name: "cart" }, document.querySelector(".icon-shopping_cart"));
const content = document.querySelector("#resume-products");

/**
 * generates page
 *
 * @param {object} product
 * @return {object} home page, cart page or product page
 */
function pageInit(product) {
  if (product === ""){
    product = window.location.search.slice(1);
    if (product === "panier") product = "cartPage";
  }
  
  switch (product) {
    case "": return new Home(content);
    case "cartPage": return new CartPage(content);
    default: return new ProductPage(content, product);
  }
}
