class Form extends Component {
    constructor(props, domTarget) {
        super(props, domTarget, "form");
        this.render();
    }

    render(){
		this.DOM.innerHTML = this.templateOrderForm();
    }

    templateOrderForm() {
        return `
        <form method="post" action="#" onsubmit="return validateOrder()" class="billing-form ftco-bg-dark p-3 p-md-5">
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
            <div class="form-group">
                <input type="submit" on value="Commander" class="btn btn-primary py-3 px-5">
            </div>
        </div>
    </form>
        `;
    }
    
    validateOrder() {
        if(orinoco.dataManager.getLocalStorage("items")) {
            let contact = {
                lastname : document.getElementById("lastname").value,
                firstname : document.getElementById("firstname").value,
                address : document.getElementById("address").value,
                town : document.getElementById("town").value,
                email : document.getElementById("email").value
            };
            console.log(contact);
            return true;
        }
        else return false;
    }
}