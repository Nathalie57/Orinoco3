class Cart extends Component {
  constructor(props, domTarget) {
    super(props, domTarget, "cart");
    const local = orinoco.dataManager.getLocalStorage("items");    
    this.products = local !== null? local: [];
    this.resume = true;
    this.render();
  }

  click(products) {
    this.resume = !this.resume;
    if(!this.resume) pageInit('cartPage', products);
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
  
  add(product){
    this.products.push(product);
    orinoco.dataManager.setLocalStorage("items", this.products);
    this.render();
  }

  cartItem() {
    let idArray = [];
    let currentProducts = orinoco.dataManager.getLocalStorage("items");
    for (let i = 0; i < currentProducts.length; i++) {
        idArray.push(currentProducts[i]._id);
    }
    let newIdArray = new Set(idArray); 
      console.log(newIdArray);
      let content = "";
      this.products.forEach(function (product) {  
      content += `
          <tr class="text-center">
            <td class="product-remove"><div onclick=""><span class="icon-close"></span></div></td>
            <td class="image-prod">
                <div class="img" style="background-image:url(${product.imageUrl});"></div>
            </td>
            <td class="product-name">
                <h3>${product.name}</h3>
            </td>
            <td class="price">${product.price/100}€</td>
            <td class="quantity">
              <div class="input-group mb-3">
                <input type="text" name="quantity"class="quantity form-control input-number" value="" min="1" max="100">
              </div>
            </td>
            <td class="total">$4.90</td>
          </tr>   
        `;
      });
    return content;
  }

  totalCart() {
    let content = "";
    let total = 0;
    for (let i = 0; i < this.products.length; i++) {
      total = total + this.products[i].price++;
    }
    return content = `
			<span>${total/100}€</span>
    `;
  }
}