class ConfirmationPage {
    constructor(domTarget){
        this.domTarget = domTarget;
        for (const [key, value] of Object.entries(orinoco)) {
            if (value instanceof Product) orinoco[key].die();
        }
        this.render();
    }

    render() {
        this.domTarget.innerHtml = this.confirmationTemplate();
    }

    confirmationTemplate() {
        return `
        <p>Merci pour votre commande</p>
        `;
    }
}