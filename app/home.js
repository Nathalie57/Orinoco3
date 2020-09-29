class Home {
    constructor() {
        orinoco.page = this;
        orinoco.dataManager.getProducts(this.showProducts.bind(this));
        // if (orinoco.cart  === undefined) new Cart({name:"cart"}, document.querySelector(".aa-cartbox"));
        // if (orinoco.modal === undefined) new Modal({name:"modal"}, document.body);
    }

    showProducts() {
        this.data = orinoco.dataManager.products;
        const target = document.querySelector(".menu-entry");
        for (let i=0, size = this.data.length; i<size; i++) {
            new Product(this.data[i], target);
        }
    }
}