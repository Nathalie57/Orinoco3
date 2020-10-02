class Component {
    constructor(props, domTarget, replaceDom=false, tagName) {
        for (const [key, value] of Object.entries(props)) {
            this[key] = value;
        }
    if (replaceDom) this.DOM = domTarget;
    else {
        this.DOM = document.createElement(tagName);
        domTarget.appendChild(this.DOM);
        }
    this.ref = this._id ? this._id : this.name;
    orinoco[this.ref] = this;
    }

    render() {}

    die() {
        this.DOM.parentNode.removeChild(this.DOM);
        delete orinoco[this.ref];
    }
}