import { LitElement, html, css } from 'lit';

export class DwButton extends LitElement {
    static styles = [
        css`
            :host {
                display: inline-block;
            }
            span {
                display: inline-block;
                background-color: var(--dw-button-background-color, #ffffff);
                color: var(--dw-button-text-color, #1283c9);
                line-height: 1rem;
                border-radius: 2rem;
                padding: 0.5rem 1rem;
                font-weight: bold;
                border-color: var(--dw-button-border-color, #1283c9);
                border-style: solid;
                border-width: var(--dw-button-border-width, 4px);
                transition: all 0.3s ease-in;
            }
            span:hover {
                background-color: var(--dw-button-hover-background-color, #e4f0f8);
                color: var(--dw-button-hover-text-color, #1283c9);
            }
        `
    ];

    render() {
        return html`<span><slot></slot></span>`;
    }
}
customElements.define('dw-button', DwButton);
