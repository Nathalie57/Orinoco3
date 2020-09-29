class Cart extends Component {
  constructor(props, domTarget) {
    super(props, domTarget, true, "cart");
    this.products = [];
    this.render();
  }

  render() {
    this.DOM.innerHTML = this.templateCart();
  }

  templateCart() {

    return `
        <a class="aa-cart-link" href="cart.html">
            <span class="fa fa-shopping-basket"></span>
            <span class="aa-cart-title">Votre panier</span>
            <input class="aa-cart-notify" type="text" id="inc" value="${this.products.length}"></input>
        </a>
        <div class="aa-cartbox-summary">
        </div>
      `;
  }

  templateProduct(data) {
    return `            <li>
                <a class="aa-cartbox-img" href="#"><img src="img/woman-small-1.jpg"
                        alt="img"></a>
                <div class="aa-cartbox-info">
                    <h4><a href="#">Product Name</a></h4>
                    <p>1 x $250</p>
                </div>
                <a class="aa-remove-product" href="#"><span class="fa fa-times"></span></a>
            </li>`;
  }


  templateInnerSummery(){
    return `
    <ul>
    <li>
        <a class="aa-cartbox-img" href="#"><img src="img/woman-small-2.jpg"
                alt="img"></a>
        <div class="aa-cartbox-info">
            <h4><a href="#">Product Name</a></h4>
            <p>1 x $250</p>
        </div>
        <a class="aa-remove-product" href="#"><span class="fa fa-times"></span></a>
    </li>

    <li>
        <span class="aa-cartbox-total-title">
            Total
        </span>
        <span class="aa-cartbox-total-price">
            $500
        </span>
    </li>
</ul>
<a class="aa-cartbox-checkout aa-primary-btn" href="cart.html">Accéder au panier</a>
`
  }
  add(productData){
    console.log(productData);
    this.products.push(productData);
    this.render();
  }
}