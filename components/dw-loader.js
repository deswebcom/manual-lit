import { LitElement, html, css } from 'lit';

export class DwLoader extends LitElement {
    static styles = [
        css`
            .loader {
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 60px;
                height: 50px;
            }
            .loader div {
                width: 12px;
                background: #888;
                animation: loader 1.8s linear infinite;
            }
            .loader div:nth-child(2) {
                animation-delay: -0.25s;
            }
            @keyframes loader {
                0% {
                    height: 12px;
                }
                25% {
                    height: 50px;
                }
                50% {
                    height: 10px;
                }
                75% {
                    height: 25px;
                }
                100% {
                    height: 12px;
                }
            }
            :host([shape="circle"]) .loader div {
                justify-content: space-around;
                position: relative;
            }
            :host([shape="circle"]) .loader div {
                margin: 2px;
                animation: loadercircle 1.8s linear infinite;
                border-radius: 50%;
            }
            :host([shape="circle"]) .loader div:nth-child(3) {
                animation-delay: 0.6s;
            }
            :host([shape="circle"]) .loader div:nth-child(1) {
                animation-delay: 1.2s;
            }
            @keyframes loadercircle {
                0% {
                    margin: 1px;
                    height: 12px;
                    width: 12px;
                    left: 1px;
                }
                25% {
                    margin: 0;
                    height: 20px;
                    width: 20px;
                    left: -4px;
                }
                50% {
                    margin: 3px;
                    height: 2px;
                    width: 2px;
                    left: -2px;
                }
                75% {
                    margin: 3px;
                    height: 16px;
                    width: 16px;
                    left: 4px;
                }
                100% {
                    margin: 1px;
                    height: 12px;
                    width: 12px;
                    left: 1px;
                }
            }
        `
    ];

    static properties = {
        active: { type: Boolean }
    }

    render() {
        return html`
            ${this.active
              ? html`
                <div class="loader">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
              `
              : ''
            }
            
        `;
    }
}
customElements.define('dw-loader', DwLoader);
