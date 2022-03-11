import {LitElement, html, css} from 'lit';

class DwShowHide extends LitElement {

    static styles = css`
        :host {
            display: block;
        }
        div {
            display: none;

        }
        :host([show]) div {
            display: block;
        }
    `;

    static properties = {
        show: { 
            type: Boolean,
            reflect: true,
        },   
    }

    constructor() {
        super();
        this.show = false;
    }

    render() {
        return html`
            <p @click="${this.change}">Mostrar / Ocultar</p>
            <div>Este contenido se ve algunas veces sí y otras no...</div>
        `;
    }

    change() {
        this.show = !this.show;
    }
}

customElements.define('dw-show-hide', DwShowHide);
