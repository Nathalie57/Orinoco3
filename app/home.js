class Home {
    constructor() {
        orinoco.page = this;
        orinoco.dataManager.getProducts(this.showProducts.bind(this));
        if (orinoco.cart  === undefined) new Cart({name:"cart"}, document.querySelector(".icon-shopping_cart"));
    }

    showProducts() {
        this.data = orinoco.dataManager.products;
        const target = document.querySelector("#resume-products");
        for (let i=0, size = this.data.length; i<size; i++) {
            new Product(this.data[i], target);
        }
    }
}