class ProductPage {
    /**
     * Creates an instance of ProductPage.
     * Removes products when productId != current productId
     * @param {object} domTarget
     * @param {string} productId
     * @memberof ProductPage
     */
    constructor(domTarget, productId){
        if (orinoco[productId] === undefined) orinoco.dataManager.getProduct(productId,this.showProduct.bind(this));
        for (const [key, value] of Object.entries(orinoco)) {
            if (value instanceof Product && key !== productId) orinoco[key].die();
        }
        this.domTarget = domTarget;
        history.pushState({page: "default"}, "productPage", "?" + productId)
    }

    showProduct(dataProduct){
        new Product(dataProduct, this.domTarget, false);
    }
}