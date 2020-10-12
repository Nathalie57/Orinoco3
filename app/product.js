class Product extends Component {
    constructor(props, domTarget) {
        console.log(props);
		super(props, domTarget, "product");
		this.products = [];
        this.resume = true;
        this.render();
    }

    click() {
		this.resume = !this.resume;
		if(!this.resume) pageInit(this._id);
        this.render();
	}

    render(){
		this.DOM.innerHTML = this.resume ? this.templateResume() : this.templateSingle();
    }

    templateResume() {
		return `
		<div class="col-md-3">
			<div class="menu-entry">
        		<div class="img" style="background-image: url(${this.imageUrl});"></div>
				<div class="text text-center pt-4">
					<h3><div>${this.name}</div></h3>
					<p class="price"><span>${this.price * .01}€</span></p>
					<p><button class="btn btn-primary btn-outline-primary" onclick="orinoco['${this.ref}'].click()">Voir les détails</button></p>
				</div>
			</div>
		</div>
        `
    }

    templateSingle() {
		return `
		<div class="row" id="single-product">
		<div class="col-lg-6 mb-5">
			<img src="${this.imageUrl}" class="img-fluid" alt="Colorlib Template">
		</div>
		<div class="col-lg-6 product-details pl-md-5">
			<h3>${this.name}</h3>
			<p class="price"><span>${this.price/100}€</span></p>
			<p>${this.description}</p>
				<div class="row mt-4">
					<div class="col-md-6">
						<div class="form-group" onclick = "orinoco['${this.ref}'].colorChoice()">
						<label for="colorChoice" id="color">
							<div class="select-wrap">
								<div class="icon"><span class="ion-ios-arrow-down"></span></div>
									<select name="colorChoice" id="colorChoice" class="form-control">
										onchange="orinoco['${this.ref}'].selectColor(this.value)">
										<option selected value="null">-- couleur --</option>
										${orinoco[this.ref].colorChoice()}
									</select>
								</div>
							</div>
						</label>
					</div>
	  			</div>
			<p>
				<div class="btn btn-primary py-3 px-5" onclick="orinoco['${this.ref}'].add()">Ajouter au panier</div>
				<div class="btn btn-primary py-3 px-5" onclick="orinoco.cart.click('${this.ref}')">Voir le panier</div>
			</p>
			</div>
		</div>
		`;
	}
	
	colorChoice() {
		let content = "";
		this.colors.forEach(function (color) {      
		  	content += `<option value="${color}">${color}</option>`;
		});
		return content;
	}

	add() {
		orinoco.cart.add({ imageUrl: this.imageUrl, name: this.name, price: this.price, _id: this._id });
	  }
	
	selectColor(info) {
		console.log("info:", info);
	}
}

