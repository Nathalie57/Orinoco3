class Form extends Component {
    constructor(props, domTarget) {
        super(props, domTarget, "form");
        this.order = {};
        this.resume = true;
        this.render();
    }

    render(){
		this.DOM.innerHTML = this.resume ? this.templateOrderForm() : this.validateOrder();
    }

    templateOrderForm() {
        return `
        <form method="post" class="billing-form ftco-bg-dark p-3 p-md-5">
        <h3 class="mb-4 billing-heading">Remplissez le formulaire pour passer commande</h3>
        <div class="row align-items-end">
            <div class="col-md-6">
                <div class="form-group">
                    <label for="lastname">Nom</label>
                    <input type="text" class="form-control" name="lastname" id="lastname" required minlength="2" maxlength="25">
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <label for="firstname">Prénom</label>
                    <input type="text" class="form-control" name="firstname" id="firstname" required minlength="6" maxlength="6">
                </div>
            </div>
            <div class="w-100"></div>
            
            <div class="w-100"></div>
            <div class="col-md-12">
                <div class="form-group">
                    <label for="address">Adresse</label>
                    <input type="text" class="form-control" name="address" id="address" required>
                </div>
            </div>
            <div class="w-100"></div>
            <div class="col-md-6">
                <div class="form-group">
                    <label for="town">Ville</label>
                    <input type="text" class="form-control" name="town" id="town" required minlength="6" maxlength="6">
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" name="email" id="email" required>
                </div>
            </div>
            <div class="w-100"></div>
        </div>
    </form>
        `;
    }
    
    validateOrder() {        
        if(orinoco.dataManager.getLocalStorage("items") !== null) {
            let products = [];
            let currentProducts = orinoco.dataManager.getLocalStorage("items");
            for (let i = 0; i < currentProducts.length; i++) {
                products.push(currentProducts[i]._id);
              }
            let contact  = new Contact(lastname.value, firstname.value, address.value, town.value, email.value);
            let order = {contact, products};
            console.log(order);
            orinoco.dataManager.postOrder(order).then(data => {
                //localStorage.setItem('order_id', data.order_id);
                //localStorage.setItem('totalPrice', total);
                console.log(data);
            });
            // this.resume = !this.resume;
            // if(!this.resume) pageInit('confirmation', products);
            // this.render();
            // removeItemStorage("items");
            // return true;
        }
        else return false;
    }
}