import { LitElement, html, css } from 'lit';

export class DwCard extends LitElement {
    static styles = [
        css`
            :host {
                display: inline-block;
            }
            article {
                border: 1px solid #ddd;
                box-shadow: 2px 2px 4px rgba(20, 20, 20, 0.2);
                border-radius: 0.5rem;
            }
            .main {
                padding: 0 1rem;
            }
            h2 {
                margin: 1rem 0;
                font-size: 1.3rem;
            }
            .actions {
                border-top: 2px solid #ddd;
                padding: 1rem;
                text-transform: uppercase;
            }
            .actions p {
                margin: 0;
            }
            .actions a {
                text-decoration: none;
                color: #35e;
                letter-spacing: .5px;
            }
        `
    ];

    static get properties() {
        return {
            actionUrl: { type: String },
            actionLabel: { type: String },
            title: { type: String },
        };
    }

    render() {
        return html`
            <article>
                <section class="main">
                    ${this.titleTemplate()}
                    ${this.bodyTemplate()}
                </section>
                ${!this.actionUrl || !this.actionLabel
                    ? ''
                    : html`
                        <section class="actions">
                            ${this.actionsTemplate()}
                        </section>
                        `
                }
            </article>
        `;
    }

    titleTemplate() {
        return html`
            ${this.title 
                ? html`<h2>${this.title}</h2>`
                : ''
            }
        `
    }

    bodyTemplate() {
        return html`
            <div class="body"><slot></slot></div>
        `
    }

    actionsTemplate() {
        return html`
            <p><a href="${this.actionUrl}">${this.actionLabel}</a></p>
        `
    }
}
customElements.define('dw-card', DwCard);
