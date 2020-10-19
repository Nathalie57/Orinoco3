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
 * @return home page, cart page or product page
 */
function pageInit(product) {
  // console.log(product);
  if (product === ""){
    // const address = window.location.href;
    product = window.location.search.slice(1);
    // product = product.split("&");
    console.log(product);
    if (product === "panier") product = "cartPage";
  }
  
  switch (product) {
    case "": return new Home(content);
    case "cartPage": return new CartPage(document.querySelector("#resume-products"));
    // case "confirmation": return new ConfirmationPage(content, argument);
    default: return new ProductPage(document.querySelector("#resume-products"), product);
  }
}