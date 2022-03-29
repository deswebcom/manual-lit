import { LitElement, html, css } from 'lit';

const showClickPosition = (e) => {
    console.log('Has hecho clic en ', e.clientX, 'x', e.clientY);
} 

export class DwEventAddRemove extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    connectedCallback() {
        super.connectedCallback();
        document.addEventListener('click', showClickPosition);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        document.removeEventListener('click', showClickPosition);
    }
}
customElements.define('dw-event-add-remove', DwEventAddRemove);
