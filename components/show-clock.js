import { LitElement, html, css } from 'lit';

export class ShowClock extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    firstUpdated() {
        setInterval( () => this.requestUpdate(), 1000);
    }

    // render() {
    //     return html`
    //         Date.now() = ${Date.now()}
    //     `;
    // }

    render() {
        return html`
            <div class="clock">${this.getClock()}</div>
        `;
    }

    getClock() {
        let date = new Date();
        return `${date.getHours().toString().padStart(2,0)}:${date.getMinutes().toString().padStart(2,0)}:${date.getSeconds().toString().padStart(2,0)}`;
    }

    // getClock() {
    //     let date = new Date();
    //     return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    // }
}
customElements.define('show-clock', ShowClock);
