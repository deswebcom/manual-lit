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
                font-weight: bold;
            }
            a {
                color: #fff;
                text-decoration: none;
            }
        `
    ];

    static properties = {
        tag: { type: Object },
    }

    render() {
        return html`
            <span>
                <a href="${this.tag.url}">${this.tag.name}</a>
            </span>`;
    }
}
customElements.define('dw-tag', DwTag);
