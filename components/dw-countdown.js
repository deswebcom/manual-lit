import { LitElement, html, css } from 'lit';

export class DwCountdown extends LitElement {
    static styles = [
        css`
            :host {
                display: inline-block;
                padding: 8px;
                background-color: red;
                color: white;
                border-radius: 4px;
            }
        `
    ];

    static properties = {
        seconds: { type: Number },
        _countdown: { 
            type: Number,
            state: true
        },
    }

    constructor() {
        super();
        this.seconds = 10;
    }

    firstUpdated() {
        this._countdown = parseInt(this.seconds);
        if(isNaN(this._countdown)) {
            this._countdown = 10;
        }
        if(this._countdown > 0) {
            this.decreaseCountdown();
        } else {
            this.informCountdownFinished();
        }
    }

    render() {
        return html`
            ${this._countdown}
        `;
    }

    decreaseCountdown() {
        this._countdown--;
        if(this._countdown <= 0) {
            this.informCountdownFinished();
        } else {
            setTimeout(() => this.decreaseCountdown(), 1000);
        }
    }

    informCountdownFinished() {
        this.dispatchEvent(new CustomEvent('dw-countdown-finished', { 
            bubbles: true,
            composed: true,
            detail: {
                seconds: this.seconds
            }
        }));
    }
}
customElements.define('dw-countdown', DwCountdown);
