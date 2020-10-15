class CartPage {
	/**
	 * Creates an instance of CartPage.
	 * @constructor
	 * @param {object} domTarget
	 * @memberof CartPage
	 */
	constructor(domTarget) {
		this.domTarget = domTarget;
		// for (const [key, value] of Object.entries(orinoco)) {
		// 	if (value instanceof Product) orinoco[key].die();
		// }
		this.render();
		history.pushState({ page: "cartPage" }, "cartPage", "?panier")
	}

	/**
	 * if number items in cart > 0, displays templateCartList() and creates an instance of Form
	 * if number items in cart = 0, displays templateEmptyCart()
	 *
	 * @memberof CartPage
	 */
	render() {
		if (orinoco.cart.products.length !== 0) {
			this.domTarget.innerHTML = this.templateCartList();
			new Form({ name: "form" }, document.querySelector("#order-form"));
		}
		else this.domTarget.innerHTML = this.templateEmptyCart();
	}

	/**
	 * Creates templateCartList() if  number items in cart > 0
	 * Calls orinoco.cart.cartItem() and orinoco.cart.totalCart()
	 *
	 * @returns template in render() function
	 * @memberof CartPage
	 */
	templateCartList() {
		return `
        <section class="ftco-section ftco-cart">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<div class="cart-list">
						<table class="table">
							<thead class="thead-primary">
								<tr class="text-center">
									<th>&nbsp;</th>
									<th>&nbsp;</th>
									<th>Produit</th>
									<th>Prix</th>
									<th>Quantité</th>
									<th>Total</th>
								</tr>
							</thead>
							<tbody>
                            ${orinoco.cart.cartItem()}
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
							${orinoco.cart.totalCart()}
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
                    <form method="post" class="billing-form ftco-bg-dark p-3 p-md-5" id="order-form">
                    
                    
                    </form>
                </div>
			</div>
		</div>
	</section>
        `;
	}

	/**
	 * Creates templateEmptyCart() if number items in cart = 0
	 *
	 * @returns template in render() function
	 * @memberof CartPage
	 */
	templateEmptyCart() {
		return `
            <h3>Votre panier Orinoco est vide.</br>
            Découvrez <a href="index.html">nos produits</a> !</h3>
        `;
	}


}