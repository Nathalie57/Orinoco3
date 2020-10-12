class ProductPage {
    constructor(domTarget, productId) {
        for (const [key, value] of Object.entries(orinoco)) {
            if (value instanceof Product && key !== productId) orinoco[key].die();
        }
        // window.location.assign("http://www.mozilla.org"); // ou
        // const address = window.location.href;
        // const product = window.location.search;
        // if (product === "") window.location.href = address + "?page=" + productId;
        // console.log(product.page)
        // alert(window.location.href, );
    }
}