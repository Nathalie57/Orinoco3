class Form extends Component {
    constructor(props, domTarget) {
        super(props, domTarget, "form");
        this.resume = true;
        this.render();
    }

    render(){
		this.DOM.innerHTML = this.resume ? this.templateOrderForm() : this.confirmation();
    }

    templateOrderForm() {
        return `
        
        <h3 class="mb-4 billing-heading">Remplissez le formulaire pour passer commande</h3>
        <div class="row align-items-end">
            <div class="col-md-6">
                <div class="form-group">
                    <label for="lastName">Nom</label>
                    <input type="text" class="form-control" name="lastName" id="lastName" required minlength="2" maxlength="25">
                    <span id="missLastName">    
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <label for="firstName">Prénom</label>
                    <input type="text" class="form-control" name="firstName" id="firstName" required minlength="2" maxlength="25">
                    <span id="missFirstName">    
                </div>
            </div>
            <div class="w-100"></div>
            
            <div class="w-100"></div>
            <div class="col-md-12">
                <div class="form-group">
                    <label for="address">Adresse</label>
                    <input type="text" class="form-control" name="address" id="address" required>
                    <span id="missAddress">
                </div>
            </div>
            <div class="w-100"></div>
            <div class="col-md-6">
                <div class="form-group">
                    <label for="city">Ville</label>
                    <input type="text" class="form-control" name="city" id="city" required minlength="2" maxlength="25">
                    <span id="missCity">    
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" name="email" id="email" required>
                    <span id="missEmail">
                </div>
            </div>
            <div class="w-100"></div>
            
        </div>
        `;
    }

    validateInput() {
        let checkText = /[A-Za-z.-]/;
        let checkEmail = /.+@.+\..+/;
        var missLastName = document.getElementById('missLastName');
        var missFirstName = document.getElementById('missFirstName');
        var missAddress = document.getElementById('missAddress');
        var missCity = document.getElementById('missCity');
        var missEmail = document.getElementById('missEmail');

        if (checkText.test(lastName.value) == false) {
                missLastName.textContent = "Le nom de famille est obligatoire.";
                missLastName.style.color = "red";
                return false;
            } else if (checkText.test(firstName.value) == false) {
                missFirstName.textContent = "Le prénom de famille est obligatoire.";
                missFirstName.style.color = "red";
                return false;
            } else if (checkText.test(address.value) == false) {
                missAddress.textContent = "L'adresse est obligatoire.";
                missAddress.style.color = "red";
                return false;
            } else if (checkText.test(city.value) == false) {
                missCity.textContent = "La ville est obligatoire.";
                missCity.style.color = "red";
                return false;
            } else if (checkEmail.test(email.value) == false) {
                missEmail.textContent = "L'email est obligatoire est doit être de la forme abc@exemple.com";
                missEmail.style.color = "red";
                return false;
            } else {
            return true;
        }
    }
    
    validateOrder() {        
        if(orinoco.dataManager.getLocalStorage("items") !== null && this.validateInput() == true) {
            let products = [];
            let currentProducts = orinoco.dataManager.getLocalStorage("items");
            for (let i = 0; i < currentProducts.length; i++) {
                products.push(currentProducts[i]._id);
            }
            let contact  = new Contact(lastName.value, firstName.value, address.value, city.value, email.value);

            let order = {contact, products};
            this.response = orinoco.dataManager.postOrder(order);
            console.log(this.response);
            localStorage.setItem('orderId', this.response);

            this.resume = !this.resume;
            if(!this.resume) pageInit('confirmation', products);
            this.render();
            //orinoco.dataManager.clearLocalStorage();
        }
        else return false;
    }

    confirmation() {
        return `
        <section class="ftco-section">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h2 class="mb-3">Merci pour votre commande !</h2>
                        <p>Nous vous remercions pour votre achat d'un montant de ${orinoco.cart.totalCart()}</p>
                        <p>Pour toute question, merci de préciser le numéro de commande suivant : ${localStorage.getItem("order_id")}</p>
                    </div>
                </div></div>
        </section>
        `;
    }
}