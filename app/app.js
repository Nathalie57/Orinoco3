let config = {
    server:"localhost:3000/api/teddies/"
  }

var orinoco = {
  pages : []
};
new DataManager(config.server);
new Cart({name:"cart"}, document.querySelector(".icon-shopping_cart"));
const content  = document.querySelector("#resume-products");

function pageInit(product) {
  if (product === undefined){
    // const address = window.location.href;
    product = window.location.search.slice(1);
  }
  else {
    //manipuler l'historique push
  }

  // orinoco.pages.push(page);
  switch(product) {
    case ""            : return new Home(content);
    case "cartPage"    : return new CartPage(content, argument);
    // case "confirmation": return new ConfirmationPage(content, argument);
    default            : return new ProductPage(content, product);
  }
}