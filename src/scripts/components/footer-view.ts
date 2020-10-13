/* eslint-disable import/no-unresolved */
import SimpleComponent from './component.interface';

/* eslint-disable no-tabs */
class FooterView extends HTMLElement implements SimpleComponent {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer>
			<span>Copyright © 2020 - Res.to Apps</span>
		</footer>
      `;
  }
}

customElements.define('footer-view', FooterView);
