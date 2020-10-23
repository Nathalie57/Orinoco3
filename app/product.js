class Product extends Component {
	/**
	 * Creates an instance of Product.
	 * @param {object} props
	 * @param {HTMLElement} domTarget
	 * @param {boolean} resume displays products by default
	 * @memberof Product
	 */
	constructor(props, domTarget, resume=true) {
		super(props, domTarget, "product");
		if (Object.entries(props).length === 0) {
			this.productError();
			return;
		}
		this.products = [];
		this.resume = resume;
		this.render();
	}

	/**
	 * changes DOM - creates product page to click
	 *
	 * @memberof Product
	 */
	click() {
		this.resume = !this.resume;
		if (!this.resume) pageInit(this._id);
		this.render();
	}

	/**
	 * Changes DOM to click
     * 
     * @returns {void} templateResume() if resume=true else templateSingle()
	 * @memberof Product
	 */
	render() {
		this.DOM.innerHTML = this.resume ? this.templateResume() : this.templateSingle();
	}

	/**
	 * Creates template for products in home page
     *
     * @returns {string} templateResume() in render() function if this.resume=true
	 * @memberof Product
	 */
	templateResume() {
		return `
		<div class="col-md-3">
			<div class="menu-entry">
        		<div class="img" style="background-image: url(${this.imageUrl});"></div>
				<div class="text text-center pt-4">
					<h2><div>${this.name}</div></h2>
					<p class="price"><span>${this.price * .01}€</span></p>
					<p><button class="btn btn-primary btn-outline-primary" onclick="orinoco['${this.ref}'].click()">Voir les détails</button></p>
				</div>
			</div>
		</div>
        `
	}

	/**
	 * Creates template for single product page
	 *
	 * @returns {string} templateSingle() in render() function if this.resume = !this.resume
	 * @memberof Product
	 */
	templateSingle() {
		return `
		<div class="row" id="single-product">
			<div class="col-lg-6 mb-5">
				<img src="${this.imageUrl}" class="img-fluid" alt="Colorlib Template">
			</div>
			<div class="col-lg-6 product-details pl-md-5">
				<h2>${this.name}</h2>
				<p class="price"><span>${this.price / 100}€</span></p>
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
		<div class=" see-products">
			<button class="btn btn-primary btn-outline-primary" onclick="window.location.href='index.html'">Retour aux produits</button>
		</div>	
		`;
	}

	/**
	 * Creates select color in single product page
	 *
	 * @return {string} select color form
	 * @memberof Product
	 */
	colorChoice() {
		let content = "";
		this.colors.forEach(function (color) {
			content += `<option value="${color}">${color}</option>`;
		});
		return content;
	}

	/**
	 * calls orinoco.cart.add() to push a product in the local storage
	 *
	 * @memberof Product
	 */
	add() {
		orinoco.cart.add({ imageUrl: this.imageUrl, name: this.name, price: this.price, _id: this._id });
	}

	selectColor(info) {
		console.log("info:", info);
	}

	/**
	 * displays error if the product doesn't exist
	 *
	 * @memberof Product
	 */
	productError() {
		this.DOM.innerHTML = "Oups, le produit demandé n'existe pas !"
	}
}

