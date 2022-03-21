import { LitElement, html, css } from 'lit';
import './dw-tag';

export class DwTagList extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
            ul {
                margin: 0; 
                padding: 0;
            }
            li {
                display: inline;
                margin-right: 3px;
            }
        `
    ];

    static properties = {
        tags: { type: Array },
    }

    constructor() {
        super();
        this.tags = [
            {
                name: 'Javascript',
                url: 'https://desarrolloweb.com/home/javascript',
            },
            {
                name: 'Lit',
                url: 'https://desarrolloweb.com/home/litelement',
            },
            {
                name: 'Web Components',
                url: 'https://desarrolloweb.com/home/web-components',
            },
            {
                name: 'Custom Elements',
                url: 'https://desarrolloweb.com/articulos/desarrollo-custom-elements-javascript-estandar.html',
            },
        ];
    }

    render() {
        return html`
            ${this.tags.length == 0
                ? html`<p>No tenemos tags que mostrar</p>`
                : html`
                    <ul>
                        ${this.tags.map( tag => html`<li><dw-tag .tag="${tag}"></dw-tag></li>`)}
                    </ul>
                `
            }
        `;
    }
}
customElements.define('dw-tag-list', DwTagList);
