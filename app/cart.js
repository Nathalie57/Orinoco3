class Cart extends Component {
  constructor(props, domTarget) {
    super(props, domTarget, "cart");
    this.products = [];
    this.resume = true;
    this.render();
  }

  click() {
    this.resume = !this.resume;
    if(!this.resume) pageInit('cartPage', this._id);
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
    return `
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
        <tr class="text-center">
          <td class="product-remove"><a href="#"><span class="icon-close"></span></a></td>

          <td class="image-prod">
            <div class="img" style="background-image:url(${this.imageUrl});"></div>
          </td>

          <td class="product-name">
            <h3>${this.name}</h3>
          </td>

          <td class="price">$4.90</td>

          <td class="quantity">
            <div class="input-group mb-3">
              <input type="text" name="quantity"
                class="quantity form-control input-number" value="1" min="1" max="100">
            </div>
          </td>

          <td class="total">$4.90</td>
        </tr><!-- END TR-->

        <tr class="text-center">
          <td class="product-remove"><a href="#"><span class="icon-close"></span></a></td>

          <td class="image-prod">
            <div class="img" style="background-image:url(images/dish-2.jpg);"></div>
          </td>

          <td class="product-name">
            <h3>Grilled Ribs Beef</h3>
          </td>

          <td class="price">$15.70</td>

          <td class="quantity">
            <div class="input-group mb-3">
              <input type="text" name="quantity"
                class="quantity form-control input-number" value="1" min="1" max="100">
            </div>
          </td>

          <td class="total">$15.70</td>
        </tr><!-- END TR-->
      </tbody>
    </table>
  </div>
    `;
  }

  add(productData){
    console.log(productData);
    this.products.push(productData);
    localStorage.setItem("product", this.products);
    this.render();
  }
}