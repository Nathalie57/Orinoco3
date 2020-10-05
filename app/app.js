let config = {
    server:"localhost:3000/api/teddies/",
  }

var orinoco = {
  pages : []
};
new DataManager(config.server);
new Cart({name:"cart"}, document.querySelector(".icon-shopping_cart"));
const content  = document.querySelector("#resume-products");

function pageInit(page, argument) {
  console.log("pageInit", page, argument);
  // if (argument)  //TODO : ajouter dans l'url le nom de l'argument
  orinoco.pages.push(page);
  switch(page) {
    case "home"     : return new Home(content);
    case "product"  : return new ProductPage(content, argument);
    case "cartPage" : return new CartPage(content, argument);
  }
}