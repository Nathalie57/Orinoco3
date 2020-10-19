class DataManager {

    /**
     * Creates an instance of DataManager.
     * @constructor
     * @param {string} src
     * @memberof DataManager
     */
    constructor(src) {
        orinoco.dataManager = this;
        this.src = src;
        this.products = null;
        this.response = null;
    }

    /**
     * get request to API
     *
     * @param {Function} callbackFunction
     * @memberof DataManager
     */
    async getProducts(callbackFunction) {
        const tempData = await fetch("http://" + this.src);
        this.products = await tempData.json();
        callbackFunction();
    }

    /**
     * get data of 1 product
     *
     * @param {string}   the product Id
     * @param {Function} callbackFunction
     * @memberof DataManager
     */
    async getProduct(product, callbackFunction) {
        const tempData = await fetch("http://" + this.src+product);
        const dataProduct = await tempData.json();
        callbackFunction(dataProduct);
    }

    /**
     * post request to API
     *
     * @param {object} data
     * @returns response from API
     * @memberof DataManager
     */
    async postOrder(data) {
        const tempData = await fetch("http://" + this.src + "order", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        this.response = await tempData.json();
        return this.response;
    }

    /**
     * set datas in local storage
     *
     * @param {string} value
     * @param {string} content
     * @memberof DataManager
     */
    setLocalStorage(value, content) {
        localStorage.setItem(value, JSON.stringify(content));
    }

    /**
     * get datas in local storage
     *
     * @param {string} value
     * @return datas
     * @memberof DataManager
     */
    getLocalStorage(value) {
        return JSON.parse(localStorage.getItem(value));
    }

    /**
     *remove datas in local storage
     *
     * @memberof DataManager
     */
    clearLocalStorage() {
        localStorage.clear();
    }
}