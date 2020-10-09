class DataManager {
    constructor(src) {
        orinoco.dataManager = this;
        this.src            = src;
        this.products       = null;
       // this.data           = null;
    }

    async getProducts(callbackFunction) {
        const tempData = await fetch("http://"+this.src);
        this.products  = await tempData.json();
        callbackFunction();
    }

    async postOrder() {        
        const tempData = await fetch("http://"+this.src+"order", {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: this.data
        });
        let response = await tempData.json();
        console.log(response);
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