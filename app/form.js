class Form extends Component {
    constructor(props, domTarget) {
        super(props, domTarget, "form");
        this.order = {};
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
                    <label for="lastname">Nom</label>
                    <input type="text" class="form-control" name="lastname" id="lastname" required minlength="2" maxlength="25">
                    <span id="missLastname">    
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <label for="firstname">Prénom</label>
                    <input type="text" class="form-control" name="firstname" id="firstname" required minlength="6" maxlength="6">
                    <span id="missFirstname">    
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
                    <label for="town">Ville</label>
                    <input type="text" class="form-control" name="town" id="town" required minlength="6" maxlength="6">
                    <span id="missTown">    
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
        let checkText = /[a-z]/;
        let checkEmail = /.+@.+\..+/;
        var missLastname = document.getElementById('missLastname');
        var missFirstname = document.getElementById('missFirstname');
        var missAddress = document.getElementById('missAddress');
        var missTown = document.getElementById('missTown');
        var missEmail = document.getElementById('missEmail');

        if (checkText.test(lastname.value) == false) {
                missLastname.textContent = "Le nom de famille est obligatoire.";
                missLastname.style.color = "red";
                return false;
            } else if (checkText.test(firstname.value) == false) {
                missFirstname.textContent = "Le prénom de famille est obligatoire.";
                missFirstname.style.color = "red";
                return false;
            } else if (checkText.test(address.value) == false) {
                missAddress.textContent = "L'adresse est obligatoire.";
                missAddress.style.color = "red";
                return false;
            } else if (checkText.test(town.value) == false) {
                missTown.textContent = "La ville est obligatoire.";
                missTown.style.color = "red";
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
            let contact  = new Contact(lastname.value, firstname.value, address.value, town.value, email.value);
 
            let order = {contact, products};
            console.log(order);
            orinoco.dataManager.postOrder(order).then(data => {
                //localStorage.setItem('order_id', data.order_id);
                //localStorage.setItem('totalPrice', total);
                console.log(data);
            });
            orinoco.dataManager.clearLocalStorage();
            this.resume = !this.resume;
            if(!this.resume) pageInit('confirmation', products);
            this.render();
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
                        <p>Nous vous remercions pour votre achat d'un montant de .......€</p>
                        <p>Pour toute question, merci de préciser le numéro de commande suivant : ..........</p>
                    </div>
                </div></div>
        </section>
        `;
    }
}