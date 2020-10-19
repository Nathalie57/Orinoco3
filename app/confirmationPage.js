class ConfirmationPage {
    /**
     * Creates an instance of ConfirmationPage.
     * @param {HTMLElement} domTarget
     * @memberof ConfirmationPage
     */
    constructor(domTarget) {
        this.domTarget = domTarget;
        for (const [key, value] of Object.entries(orinoco)) {
            if (value instanceof CartPage) orinoco[key].die();
        }
    }
}