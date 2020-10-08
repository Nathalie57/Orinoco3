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

    async postOrder(data) {        
        const tempData = await fetch("http://"+this.src+"order", {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        data = await tempData.json();
        console.log(data);
    }

    setLocalStorage(value, content) {
        localStorage.setItem(value, JSON.stringify(content));
    }

    getLocalStorage(value) {
        return JSON.parse(localStorage.getItem(value));
    }

    clearLocalStorage() {
        localStorage.clear();
    }
}