import {LitElement, html, css} from 'lit';

class DwMessage extends LitElement {

    static styles = css`
        :host {
            display: inline-block;
            border-radius: 0.5rem;
            padding: 0.2rem 0.5rem;
            background-color: #475119;
            color: #fff;
            font-weight: bold;
        }
    `;

    static properties = {
        message: { type: String },
    }

    constructor() {
        super();
        this.message = "Hola Lit!!!"
    }

    render() {
        return html`<div>${this.message}</div>`;
    }
}

customElements.define('dw-message', DwMessage);
