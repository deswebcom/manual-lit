import {LitElement, html, css} from 'lit';

class DwShowHide extends LitElement {

    static styles = css`
        :host {
            display: block;
        }
        main {
            border: 1px solid #ddd;
            padding: 10px;
        }
        .content {
            display: none;
        }
        .trigger {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .trigger div {
            flex-grow: 1;
        }
        svg {
            width: 52px;
            height: 52px;
            transition: transform 0.3s linear;
        }
        :host([show]) .content {
            display: block;
        }
        :host([show]) svg {
            transform: rotate(90deg);
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
            <main>
                <section class="trigger" @click=${this.change}>
                    <div>
                        <slot name="trigger"></slot>
                    </div>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"/></svg>
                    </span>
                </section>
                <section class="content">
                    <slot name="content"></slot>
                </section>
            </main>
        `;
    }

    change() {
        this.show = !this.show;
    }
}

customElements.define('dw-show-hide', DwShowHide);
