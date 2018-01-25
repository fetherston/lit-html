import { LitElement, html } from '../../node_modules/@polymer/lit-element/lit-element.js';
import { shopButtonStyle } from './shop-button-style.js';
import '../node_modules/@polymer/iron-icon/iron-icon.js';
import './shop-icons.js';

class Shop404Warning extends LitElement {
  render() {
    return html`
    ${ shopButtonStyle }
    <style>

      :host {
        display: block;
        text-align: center;
        color: var(--app-secondary-color);
      }

      iron-icon {
        display: inline-block;
        width: 60px;
        height: 60px;
      }

      h1 {
        margin: 50px 0 50px 0;
        font-weight: 300;
      }

    </style>

    <div>
      <iron-icon icon="error"></iron-icon>
      <h1>Sorry, we couldn't find that page</h1>
    </div>
    <shop-button>
      <a href="/">Go to the home page</a>
    </shop-button>
`;
  }

  static get is() { return 'shop-404-warning'; }
}

customElements.define(Shop404Warning.is, Shop404Warning);
