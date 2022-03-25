import { LitElement, html, css } from 'lit';

export class DwMenu extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
            ::slotted(*) {
                display: block;
                border-bottom: 1px solid #ddd;
                margin: 0.5rem 0;
                padding-bottom: 0.5rem;
            }
        `
    ];

    static get properties() {
        return {
        selected: { 
            type: String,
            reflect: true,
        }
        };
    }

    constructor() {
        super();
        console.log(this.querySelectorAll('p'));
        console.log(this.querySelectorAll('*'));
    }

    firstUpdated() {
        let elements = this._slottedElements;
        elements.forEach(elem => {
            let that = this;
            elem.addEventListener('click', function(e) {
                let newSelected = this.getAttribute('name');
                that.selected = newSelected;
                this.dispatchEvent(new CustomEvent('dw-menu-changed', { 
                    composed: true,
                    bubbles: true,
                    detail: {
                        selected: newSelected
                    }
                }));
            });
        })
    }

    get _slottedElements() {
        const mySlot = this.shadowRoot.querySelector('slot');
        return mySlot.assignedElements({flatten: true});
    }    

    render() {
        return html`
            <div><slot></slot></div>
        `;
    }

    captureSelected(e) {
        let elem = e.target;
        this.selected = elem.getAttribute('name');
    }
}
customElements.define('dw-menu', DwMenu);
