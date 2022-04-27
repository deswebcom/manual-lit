import { LitElement, html, css } from 'lit';
import './dw-collection-service.js';

export class DwShowJson extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    static properties = {
        json: { type: Object },
        entity: { type: String },
    }

    firstUpdated() {
        this.service = this.shadowRoot.querySelector('dw-collection-service');
    }

    render() {
        return html`
            <dw-collection-service
                entity="${this.entity}"
                @dw-collection-success="${this.onSuccess}"
                @dw-collection-error="${this.onError}"
            ></dw-collection-service>
            <button @click=${this.showComments}>Recibe Comentarios</button>
            <button @click=${this.showUsers}>Recibe Comentarios</button>
            <pre>${JSON.stringify(this.json)}</pre>
        `;
    }

    showComments() {
        this.getEntity('comments');
    }

    showUsers() {
        this.getEntity('users');
    }

    getEntity(entity) {
        this.entity = entity;
        this.updateComplete
            .then(() => this.service.getData());
    }

    onSuccess(e) {
        this.json = e.detail;
    }

    onError(e) {
        this.json = e.detail;
    }

}
customElements.define('dw-show-json', DwShowJson);
