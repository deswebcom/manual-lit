import './dw-loader.js';

import { LitElement, html, css } from 'lit';

class DwAjaxSimulator  extends LitElement {

  static styles = css`
    :host {
      display: block;
    }
    div {
      display: flex;
      height: 50px;
      margin-bottom: 2rem;
    }
    span {
      margin-right: 1rem;
    }
  `
  
  static properties = {
    loading: { type: Boolean },
  }

  constructor() {
    super();
    this.loading = false;
  }

  render() {
    return html`
      <div>
        <span>
          <button @click="${this.simulate}">Simular Ajax</button>
        </span>
        <dw-loader ?active="${this.loading}"></dw-loader>
      </div>
    `;
  }

  simulate() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 4000);
  }
}

customElements.define('dw-ajax-simulator', DwAjaxSimulator);