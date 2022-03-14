import { LitElement, html, css } from 'lit';

export class DwAge extends LitElement {
    static get properties() {
        return {
            birthday: { type: String },
        };
    }

    render() {
        return html`<span>${this.calculateAge(this.birthday)}</span>`;
    }

    // https://stackoverflow.com/questions/4060004/calculate-age-given-the-birth-date-in-the-format-yyyymmdd
    calculateAge(date) {
        if(!date) {
            return '-';
        }
        var birthday = +new Date(date);
        if(isNaN(birthday)) {
            return 'Formato de fecha incorrecto';
        }
        return ~~((Date.now() - birthday) / (31557600000));
    }
}
customElements.define('dw-age', DwAge);
