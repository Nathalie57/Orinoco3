class Product extends Component {
    constructor(props, domTarget) {
        console.log(props);
        super(props, domTarget, "product");
        this.resume = true;
        this.render();
    }

    click() {
		this.resume = !this.resume;
		if(!this.resume) pageInit('product', this._id);
        this.render();
	}

    render(){
		this.DOM.innerHTML = this.resume ? this.templateResume() : this.templateSingle();
    }

    templateResume() {
		return `
		<div class="col-md-3">
			<div class="menu-entry">
        		<a href="#" class="img" style="background-image: url(${this.imageUrl});"></a>
				<div class="text text-center pt-4">
					<h3><a href="#">${this.name}</a></h3>
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
			<a href="${this.imageUrl}" class="image-popup"><img src="${this.imageUrl}" class="img-fluid" alt="Colorlib Template"></a>
		</div>
		<div class="col-lg-6 product-details pl-md-5">
			<h3>${this.name}</h3>
			<p class="price"><span>${this.price * .01}€</span></p>
			<p>${this.description}</p>
				<div class="row mt-4">
					<div class="col-md-6">
						<div class="form-group d-flex">
							<div id="color-choice" class="select-wrap" onclick = "orinoco['${this.ref}'].colorChoice()">
								<div class="icon"><span class="ion-ios-arrow-down"></span></div>
									<label for="colorChoice" id="color">
										<select name="colorChoice" id="colorChoice" class="form-control">
											
										</select>
									</label>
								</div>
							</div>
						</div>
					<div class="w-100"></div>
					<div class="input-group col-md-6 d-flex mb-3">
			 <span class="input-group-btn mr-2">
				<button type="button" class="quantity-left-minus btn"  data-type="minus" data-field="">
			   <i class="icon-minus"></i>
				</button>
				</span>
			 <input type="text" id="quantity" name="quantity" class="form-control input-number" value="1" min="1" max="100">
			 <span class="input-group-btn ml-2">
				<button type="button" class="quantity-right-plus btn" data-type="plus" data-field="">
				 <i class="icon-plus"></i>
			 </button>
			 </span>
		  </div>
	  </div>
	  <p><a href="#" class="btn btn-primary py-3 px-5" onclick="orinoco.cart.add('${this.ref}')">Ajouter au panier</a></p>
	  <p><a href="#" class="btn btn-primary py-3 px-5" onclick="orinoco.cart.click('${this.ref}')">Voir le panier</a></p>
		</div>
	</div>
		`;
	}
	
	colorChoice(colors) {
		colors = this.colors;
		const select = document.getElementById("colorChoice");
		colors.forEach(function(color) {
			let option = document.createElement('option');
            let optionValue = document.createTextNode(color);
            option.appendChild(optionValue);
            select.appendChild(option);
		});
	}
}

