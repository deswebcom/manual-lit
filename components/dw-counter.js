import {LitElement, html, css} from 'lit';

class DwCounter extends LitElement {

    static styles = css`
        :host {
            display: block;
        }
        .count {
            display: inline-block;
            font-size: 2rem;
            border-radius: 1rem;
            padding: 0.7rem 1rem;
            background-color: #236bf0;
            color: #fff;
            font-weight: bold;
        }
    `;

    static properties = {
        counter: { type: Number },
    }

    constructor() {
        super();
        this.counter = 0;
    }

    render() {
        return html`
            <div class="count">${this.counter}</div>
            <button @click="${this.add}">+1</button>
            <button @click="${this.subtract}">-1</button>
        `;
    }

    add() {
        this.counter++;
    }

    subtract() {
        this.counter--;
    }
}

customElements.define('dw-counter', DwCounter);
