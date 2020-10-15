class Cart extends Component {

  /**
   * Creates an instance of Cart.
   * 
   * @constructor
   * @param {*} props
   * @param {obect} domTarget
   * @memberof Cart
   */
  constructor(props, domTarget) {
    super(props, domTarget, "cart");
    const local = orinoco.dataManager.getLocalStorage("items");
    this.products = local !== null ? local : [];
    this.resume = true;
    this.render();
  }

  /**
   * changes DOM - creates cart page to click
   *
   * @param {object} products
   * @memberof Cart
   */
  click(products) {
    this.resume = !this.resume;
    if (!this.resume) pageInit('cartPage', products);
    this.render();
  }

  /**
     * Displays icon cart in nav bar
     * 
     * @returns iconCartTemplate()
     * @memberof Cart
     */
  render() {
    this.DOM.innerHTML = this.iconCartTemplate();
  }

  /**
   * Creates iconCartTemplate() in nav bar with number products in cart
   *
   * @returns template in render() function
   * @memberof Cart
   */
  iconCartTemplate() {
    return `   
      <span class="bag d-flex justify-content-center align-items-center" onclick="orinoco['${this.ref}'].click()"><small>${this.products.length}</small></span></a>
    `;
  }

  /**
   * adds product in local storage and incrementes icon cart in nav bar
   *
   * @param {object} product
   * @memberof Cart
   */
  add(product) {
    this.products.push(product);
    orinoco.dataManager.setLocalStorage("items", this.products);
    this.render();
  }

  /**
   * makes a loop to display each product in cart
   *
   * @returns cartItem template
   * @memberof Cart
   */
  cartItem() {
    let products = {};
    for (let i = 0, count = this.products.length; i < count; i++) {
      console.log(this.products[i]._id);
      if (products[this.products[i]._id] === undefined) {
        products[this.products[i]._id] = this.products[i];
        products[this.products[i]._id].qty = 1;
      }
      else products[this.products[i]._id].qty++;
    }
    let content = "";
    for (const [key, value] of Object.entries(products)) {
      content += `
          <tr class="text-center">
            <td class="product-remove"><div onclick=""><span class="icon-close"></span></div></td>
            <td class="image-prod">
                <div class="img" style="background-image:url(${value.imageUrl});"></div>
            </td>
            <td class="product-name">
                <h3>${value.name}</h3>
            </td>
            <td class="price">${value.price / 100}€</td>
            <td class="quantity">
              <div class="input-group mb-3">
                  <div class="quantity form-control input-number">${value.qty}</div>
              </div>
            </td>
            <td class="total">${value.price * value.qty / 100}€</td>
          </tr>   
        `;
    };
    return content;
  }

  /**
   * calculates and displays total price
   *
   * @return {*} 
   * @memberof Cart
   */
  totalCart() {
    let content = "";
    let total = 0;
    for (let i = 0; i < this.products.length; i++) {
      total = total + this.products[i].price;
    }
    return content = `
			<span>${total / 100}€</span>
    `;
  }
}