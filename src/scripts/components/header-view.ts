/* eslint-disable import/no-unresolved */
/* eslint-disable class-methods-use-this */
import SimpleComponent from './component.interface';

class HeaderView extends HTMLElement implements SimpleComponent {
  render(): void {
    this.innerHTML = `
    <header>
    <div class="logo">
      <a href="/">
        <img src="./images/logo.png" alt="Logo website Res.to"
      /></a>
    </div>
    <div class="hamburger-menu">
      <button class="hamburger-button">
        <i class="fas fa-bars"></i>
      </button>
    </div>
    <nav class="drawer">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="#/detail/12">Favorite</a></li>
        <li>
          <a
            target="_blank"
            href="https://github.com/yuandahanif"
            rel="noopener"
            rel="noreferrer"
            >About us</a
          >
        </li>
      </ul>
    </nav>
  </header>
    `;
  }

  connectedCallback(): void {
    this.render();
  }
}

customElements.define('header-view', HeaderView);
