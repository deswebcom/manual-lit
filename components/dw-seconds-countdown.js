import { LitElement, html, css } from 'lit';

export class DwSecondsCountdown extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
                font-size: var(--dw-seconds-countdown-font-size, 3rem);
            }
            span {
                color: var(--dw-seconds-countdown-inactive-font-color, #999);
            }
            :host([active]) span {
                color: var(--dw-seconds-countdown-font-color, #de2626);
            }
        `
    ];
    static properties = {
        seconds: { type: Number },
        active: { 
            type: Boolean,
            reflect: true
        },
    }

    constructor() {
        super();
        this.seconds = 0;
        this.active = false;
        this._interval = null;
    }

    render() {
        return html`
            <span>
                ${this.seconds}
            </span>
        `;
    }

    _createInterval() {
        if(!this._interval) {
            this._interval = setInterval(() => {
                this.seconds--; 
                console.log('resto seconds', this.seconds);
            }
                , 1000);
        }
    }

    _cancelInterval() {
        if(this._interval) {
            clearInterval(this._interval);
        }
        this._interval = null;
    }

    updated(changedProperties) {
        if(changedProperties.has('seconds')) {
            if(this.seconds <= 0) {
                this.finish();
            }
        }
        if(changedProperties.has('active')) {
            console.log(`Ha cambiado la propiedad active. El valor antiguo es ${changedProperties.get('active')} y el valor nuevo es ${this.active}`);
            if(this.active) {
                if(this.seconds > 0) {
                    this._createInterval();    
                }
                if(this.seconds === 0) {
                    this.active = false;    
                }
            } else {
                this._cancelInterval();
            }
        }
    }

    finish() {
        this.dispatchEvent(new CustomEvent('dw-countdown-finished', { 
            bubbles: true,
            composed: true,
        }));
        this._cancelInterval();
        this.active = false;
        this.seconds = 0;
    }

    disconnectedCallback() {
        this._cancelInterval();
    }
}
customElements.define('dw-seconds-countdown', DwSecondsCountdown);
