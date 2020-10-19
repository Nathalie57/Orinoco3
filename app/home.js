class Home {
    /**
     * Creates an instance of Home.
     * @param {HTMLElement} domTarget
     * @memberof Home
     */
    constructor(domTarget) {
        orinoco.page = this;
        orinoco.dataManager.getProducts(this.showProducts.bind(this));
        this.domTarget = domTarget;
    }

    /**
     * displays all products from API
     *
     * @memberof Home
     */
    showProducts() {
        this.data = orinoco.dataManager.products;
        for (let i = 0, size = this.data.length; i < size; i++) {
            new Product(this.data[i], this.domTarget);
        }
    }
}
