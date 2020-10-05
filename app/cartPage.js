class CartPage {
    constructor(domTarget, products){
        products = localStorage.getItem("items");
        console.log(products);
        for (const [key, value] of Object.entries(orinoco)) {
            if (value instanceof Product) orinoco[key].die();
        }
    }
}