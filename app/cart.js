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
      <span class="bag d-flex justify-content-center align-items-center"><small>${this.products.length}</small></span></a>
    `;
  }

  templateProduct(data) {
    return ``;
  }


  templateInnerSummery(){
    return ``;
  }
  
  add(productData){
    console.log(productData);
    this.products.push(productData);
    this.render();
  }
}