import { LitElement, html, css } from 'lit';

export class DwCollectionService extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    static properties = {
      entity: { type: String }
    }

    getData() {
        fetch(`https://jsonplaceholder.typicode.com/${this.entity}/1`)
            .then(response => response.json())
            .then(json => this.sendSuccess(json))
            .catch(err => this.sendError(err))
    }

    sendSuccess(data) {
        console.log('Esto es un success', data);
        this.dispatchEvent(new CustomEvent('dw-collection-success', { 
            bubbles: true,
            composed: true,
            detail: data
        }));
    }

    sendError(err) {
        console.log('Esto es un error', err);
        this.dispatchEvent(new CustomEvent('dw-collection-error', { 
            bubbles: true,
            composed: true,
            detail: err
        }));
    }
}
customElements.define('dw-collection-service', DwCollectionService);
