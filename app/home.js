class Home {
    constructor(domTarget) {
        orinoco.page = this;
        orinoco.dataManager.getProducts(this.showProducts.bind(this));
        this.domTarget = domTarget;
    }

    showProducts() {
        this.data = orinoco.dataManager.products;
        for (let i=0, size = this.data.length; i<size; i++) {
            new Product(this.data[i], this.domTarget);
        }
    }
}
