class ProductPage {
    constructor(domTarget, productId){
        for (const [key, value] of Object.entries(orinoco)) {
            if (value instanceof Product && key !== productId) orinoco[key].die();
        }
 
        history.pushState({page: "default"}, "productPage", "?page=" + productId)
    }
}