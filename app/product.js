class Product extends Component {
    constructor(props, domTarget) {
        console.log(props);
        super(props, domTarget, false, "product");
        this.DOM.onclick = this.click.bind(this);
        this.resume = true;
        this.render();
    }

    click() {
        this.resume = !this.resume;
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
					<p><button class="btn btn-primary btn-outline-primary">Voir les détails</button></p>
				</div>
			</div>
		</div>
        `
    }

    templateSingle() {
		document.location.href='product-single.html';
		let idProduct = this._id;
		console.log(idProduct);
    }
}

