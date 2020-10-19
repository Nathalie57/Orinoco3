class Form extends Component {

    /**
     * Creates an instance of Form.
     * @constructor
     * @param {*} props
     * @param {object} domTarget
     * @memberof Form
     */
    constructor(props, domTarget) {
        super(props, domTarget, "form");
        this.resume = true;
        this.checkText = /[A-Za-z.-]{2,}/;
        this.checkEmail = /.+@.+\..+/;
        this.missLastName = document.getElementById('missLastName');
        this.missFirstName = document.getElementById('missFirstName');
        this.missAddress = document.getElementById('missAddress');
        this.missCity = document.getElementById('missCity');
        this.missEmail = document.getElementById('missEmail');
        this.render();
    }

    /**
     * Changes DOM when form is valid
     * 
     * @returns templateOrderForm() if resume=true else confirmation()
     * @memberof Form
     */
    render(){
		this.DOM.innerHTML = this.resume ? this.templateOrderForm() : this.confirmation();
    }

    /**
     * Creates order form template
     *
     * @returns template in render() function if this.resume=true
     * @memberof Form
     */
    templateOrderForm() {
        return `        
        <h3 class="mb-4 billing-heading">Remplissez le formulaire pour passer commande</h3>
        <div class="row align-items-end">
            <div class="col-md-6">
                <div class="form-group">
                    <label for="lastName">Nom</label>
                    <input onchange="orinoco.form.lastNameValidate()" type="text" class="form-control" name="lastName" id="lastName" required minlength="2" maxlength="25">
                    <span id="missLastName">    
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <label for="firstName">Prénom</label>
                    <input onchange="orinoco.form.firstNameValidate()" type="text" class="form-control" name="firstName" id="firstName" required minlength="2" maxlength="25">
                    <span id="missFirstName">    
                </div>
            </div>
            <div class="w-100"></div>
            
            <div class="w-100"></div>
            <div class="col-md-12">
                <div class="form-group">
                    <label for="address">Adresse</label>
                    <input onchange="orinoco.form.addressValidate()" type="text" class="form-control" name="address" id="address" required>
                    <span id="missAddress">
                </div>
            </div>
            <div class="w-100"></div>
            <div class="col-md-6">
                <div class="form-group">
                    <label for="city">Ville</label>
                    <input onchange="orinoco.form.cityValidate()" type="text" class="form-control" name="city" id="city" required minlength="2" maxlength="25">
                    <span id="missCity">    
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <label for="email">Email</label>
                    <input onchange="orinoco.form.emailValidate()" type="email" class="form-control" name="email" id="email" required>
                    <span id="missEmail">
                </div>
            </div>
            <div class="w-100"></div>
            <div class="form-group">
                        <input onclick="orinoco.form.validateOrder()" value="Commander" class="btn btn-primary py-3 px-5">
                    </div>
        </div>
        `;
    }

    /**
     * Validates lastName in order form
     *
     * @returns true if lastName is valid
     * @memberof Form
     */
    lastNameValidate() {
        if (lastName.value == "") {
            missLastName.textContent = "Le nom de famille est obligatoire";
            missLastName.style.color = "red";
            return false;
        } else if 
            (this.checkText.test(lastName.value) == false) {
                missLastName.textContent = "Le nom de famille n'est pas valide.";
                missLastName.style.color = "red";
                return false;
        }
        else {
            missLastName.textContent = undefined;
            return true;
        }
    }

    /**
     * Validates firstName in order form
     *
     * @returns true if firstName is valid
     * @memberof Form
     */
    firstNameValidate() {
        if (firstName.value == "") {
            missFirstName.textContent = "Le prénom est obligatoire";
            missFirstName.style.color = "red";
            return false;
        } else if 
            (this.checkText.test(firstName.value) == false) {
                missFirstName.textContent = "Le prénom n'est pas valide.";
                missFirstName.style.color = "red";
                return false;
        }
        else {
            missFirstName.textContent = undefined;
            return true;
        }
    }

    /**
     * Validates address in order form
     *
     * @returns true if address is valid
     * @memberof Form
     */
    addressValidate() {
        if (address.value == "") {
            missAddress.textContent = "L'adresse est obligatoire";
            missAddress.style.color = "red";
            return false;
        } else if 
            (this.checkText.test(address.value) == false) {
                missAddress.textContent = "L'adresse n'est pas valide.";
                missAddress.style.color = "red";
                return false;
        }
        else {
            missAddress.textContent = undefined;
            return true;
        }
    }

    /**
     * Validates city in order form
     *
     * @returns true if city is valid
     * @memberof Form
     */
    cityValidate() {
        if (city.value == "") {
            missCity.textContent = "Le nom de la ville est obligatoire";
            missCity.style.color = "red";
            return false;
        } else if 
            (this.checkText.test(city.value) == false) {
                missCity.textContent = "Le nom de la ville n'est pas valide.";
                missCity.style.color = "red";
                return false;
        }
        else {
            missCity.textContent = undefined;
            return true;
        }
    }

    /**
     * Validates email in order form
     *
     * @returns true if email is valid
     * @memberof Form
     */
    emailValidate() {
        if (email.value == "") {
            missEmail.textContent = "L'email est obligatoire";
            missEmail.style.color = "red";
            return false;
        } else if 
            (this.checkEmail.test(email.value) == false) {
                missEmail.textContent = "L'email n'est pas valide.";
                missEmail.style.color = "red";
                return false;
        }
        else {
            missEmail.textContent = undefined;
            return true;
        }
    }
    
    /**
     * Validates order form, sends post request to API -> gets idOrder from API
     *
     * @returns true if order form and post request are ok
     * @memberof Form
     */
    async validateOrder() {        
        if(orinoco.dataManager.getLocalStorage("items") !== null
            && this.lastNameValidate()  == true 
            && this.firstNameValidate() == true 
            && this.addressValidate()   == true
            && this.cityValidate()      == true
            && this.emailValidate()     == true) {
            let products = [];
            let currentProducts = orinoco.dataManager.getLocalStorage("items");
            for (let i = 0; i < currentProducts.length; i++) {
                products.push(currentProducts[i]._id);
            }
            let contact  = new Contact(lastName.value, firstName.value, address.value, city.value, email.value);

            let order = {contact, products};
            const {orderId} = await orinoco.dataManager.postOrder(order);
            this.orderId = orderId;
            localStorage.setItem('orderId', this.response);

            this.resume = !this.resume;
           // if(!this.resume) pageInit('confirmation', products);
            this.render();
            orinoco.dataManager.clearLocalStorage();
            history.pushState({page: "confirmation"}, "confirmation", "?confirmation")
            window.setTimeout('window.location.href="index.html"', 10000); 
        }
        else return false;
    }

    /**
     * Creates confirmation template
     *
     * @returns template in render() function if this.resume=!this.resume
     * @memberof Form
     */
    confirmation() {
        return `
        <section class="ftco-section">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h2 class="mb-3">Merci pour votre commande !</h2>
                        <div class="confirmation">
                        <p>Nous vous remercions pour votre achat d'un montant de ${orinoco.cart.totalCart()}</p>
                        <p>Pour toute question, merci de préciser le numéro de commande suivant : <span>${this.orderId}<span></p><br>
                        <p>Vous allez être redirigé vers l'accueil dans quelques instants.</p>
                    </div>
                </div>
            </div>
        </section>
        `;
    }
}