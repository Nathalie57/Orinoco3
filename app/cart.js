class Cart extends Component {
  constructor(props, domTarget) {
    super(props, domTarget, "cart");
    this.products = [];
    this.resume = true;
    this.render();
  }

  click(productRef) {
    this.resume = !this.resume;
    if(!this.resume) pageInit('cartPage', productRef);
    this.render();
  }

  render() {
    this.DOM.innerHTML = this.resume ? this.iconCartTemplate() : this.cartListTemplate();
  }

  iconCartTemplate() {
    return `   
      <span class="bag d-flex justify-content-center align-items-center" onclick="orinoco['${this.ref}'].click()"><small>${this.products.length}</small></span></a>
    `;
  }

  cartListTemplate(){
    let item = localStorage.getItem("items");

    if(item !== null) {
    let itemJson = JSON.parse(item);

    return `
    <div class="col-md-12">
					<div class="cart-list">
						<table class="table">
							<thead class="thead-primary">
								<tr class="text-center">
									<th>&nbsp;</th>
									<th>&nbsp;</th>
									<th>Produit</th>
									<th>Prix</th>
								</tr>
							</thead>
							<tbody>
								<tr class="text-center">
									<td class="product-remove"><a href="#"><span class="icon-close"></span></a></td>

									<td class="image-prod">
										<div class="img" style="background-image:url(${itemJson.imageUrl});"></div>
									</td>

									<td class="product-name">
										<h3>${itemJson.name}</h3>
									</td>

									<td class="price">${itemJson.price * .01}€</td>

								</tr><!-- END TR-->
							</tbody>
						</table>
					</div>
				</div>
			</div>
			<div class="row justify-content-end">
				<div class="col col-lg-3 col-md-6 mt-5 cart-wrap">
					<div class="cart-total mb-3">
						<p class="d-flex total-price">
							<span>Total</span>
							<span>$17.60</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="ftco-section">
		<div class="container">
			<div class="row">
				<div class="col-xl-8">
					<form action="#" class="billing-form ftco-bg-dark p-3 p-md-5">
						<h3 class="mb-4 billing-heading">Remplissez le formulaire pour passer commande</h3>
						<div class="row align-items-end">
							<div class="col-md-6">
								<div class="form-group">
									<label for="lastname">Nom</label>
									<input type="text" class="form-control" placeholder="">
								</div>
							</div>
							<div class="col-md-6">
								<div class="form-group">
									<label for="firstname">Prénom</label>
									<input type="text" class="form-control" placeholder="">
								</div>
							</div>
							<div class="w-100"></div>
							
							<div class="w-100"></div>
							<div class="col-md-12">
								<div class="form-group">
									<label for="address">Adresse</label>
									<input type="text" class="form-control" placeholder="">
								</div>
							</div>
							<div class="w-100"></div>
							<div class="col-md-6">
								<div class="form-group">
									<label for="town">Ville</label>
									<input type="text" class="form-control" placeholder="">
								</div>
							</div>
							<div class="col-md-6">
								<div class="form-group">
									<label for="email">Email</label>
									<input type="text" class="form-control" placeholder="">
								</div>
							</div>
							<div class="w-100"></div>
							<div class="form-group">
								<input type="submit" value="Commander" class="btn btn-primary py-3 px-5">
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</section>
    `;
    }
    else return `
    <h3>Votre panier Orinoco est vide.</br>
    Découvrez <a href="index.html">nos produits</a></h3>
    `
  }
  
  add(product){
    this.products.push(product);
    orinoco.dataManager.setLocalStorage("items",this.products);
    this.render();
  }
}