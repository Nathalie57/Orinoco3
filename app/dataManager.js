class DataManager {
    constructor(src) {
        orinoco.dataManager = this;
        this.src            = src;
        this.products       = null;
    }

    async getProducts(callbackFunction) {
        const tempData = await fetch("http://"+this.src);
        this.products  = await tempData.json();
        callbackFunction();
    }
}