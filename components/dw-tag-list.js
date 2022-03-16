import { LitElement, html, css } from 'lit';

export class DwTagList extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    static get properties() {
        return {
            tags: { type: Array },
        };
    }

    constructor() {
        super();
        this.tags = ['Javascript', 'Lit', 'Web Components', 'Custom Elements', 'Array'];
    }

    render() {
        return html`
            ${this.tags.length == 0
                ? html`<p>No tenemos tags que mostrar</p>`
                : html`
                    <ul>
                        ${this.tags.map( tag => html`<li>${tag}</li>`)}
                    </ul>
                `
            }
        `;
    }
}
customElements.define('dw-tag-list', DwTagList);
