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
    orinoco[this.name] = this;
    }

    render(){}
}