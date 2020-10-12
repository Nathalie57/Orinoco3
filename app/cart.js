class Cart extends Component {
  constructor(props, domTarget) {
    super(props, domTarget, "cart");
    const local = orinoco.dataManager.getLocalStorage("items");
    this.products = local !== null ? local : [];
    this.resume = true;
    this.render();
  }

  click(products) {
    this.resume = !this.resume;
    if (!this.resume) pageInit('cartPage', products);
    this.render();
  }

  render() {
    // this.DOM.innerHTML = this.resume ? this.iconCartTemplate() : this.cartListTemplate();
    this.DOM.innerHTML = this.iconCartTemplate();

  }

  iconCartTemplate() {
    return `   
      <span class="bag d-flex justify-content-center align-items-center" onclick="orinoco['${this.ref}'].click()"><small>${this.products.length}</small></span></a>
    `;
  }

  add(product) {
    this.products.push(product);
    orinoco.dataManager.setLocalStorage("items", this.products);
    this.render();
  }

  cartItem() {
    let products = {};
    for (let i = 0, count = this.products.length; i < count; i++) {
      console.log(this.products[i]._id);
      if (products[this.products[i]._id] === undefined) {
        products[this.products[i]._id]     = this.products[i];
        products[this.products[i]._id].qte = 1;
      }
      else products[this.products[i]._id].qte++;
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
                ${value.qte}
              </div>
            </td>
            <td class="total">${value.price * value.qte / 100}€</td>
          </tr>   
        `;
    };
    return content;
  }

  totalCart() {
    let content = "";
    let total = 0;
    for (let i = 0; i < this.products.length; i++) {
      total = total + this.products[i].price++;
    }
    return content = `
			<span>${total / 100}€</span>
    `;
  }
}