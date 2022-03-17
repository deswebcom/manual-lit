import { LitElement, html, css } from 'lit';

export class DwTag extends LitElement {
    static styles = [
        css`
            :host {
                display: inline;
            }
            span {
                display: inline-block;
                padding: 0.2rem 0.4rem;
                border-radius: 0.2rem;
                background-color: #666;
                color: #fff;
                font-weight: bold;
            }
        `
    ];

    static properties = {
        name: { type: String },
    }

    render() {
        return html`<span>${this.name}</span>`;
    }
}
customElements.define('dw-tag', DwTag);
