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
            <div class="img" style="background-image:url(images/menu-2.jpg);"></div>
          </td>

          <td class="product-name">
            <h3>${this.cart}</h3>
          </td>

          <td class="price">$4.90</td>

          <td class="quantity">
            <div class="input-group mb-3">
              <input type="text" name="quantity"
                class="quantity form-control input-number" value="1" min="1" max="100">
            </div>
          </td>

          <td class="total">$4.90</td>
      </tbody>
    </table>
  </div>
    `;
  }
  
  add(productRef){
    console.log(productRef);
    this.products.push(orinoco.dataManager.products[productRef]);
    this.render();
  }
}