/* eslint-disable class-methods-use-this */
/* eslint-disable import/no-unresolved */
import SimpleComponent from './component.interface';

class HeroView extends HTMLElement implements SimpleComponent {
  connectedCallback() {
    this.render();
  }

  render(): void {
    this.innerHTML = `
    <section class="hero-section">
      <!-- caption -->
      <h1 class="hero-section__heading-title">Makan dimana hari ini?</h1>
      <p class="hero-section__description">
        Res.to memberikan pilihan tempat makan terbaik dan terlengkap sepsial
        untukmu.
      </p>
      <!-- skip to restorant -->
      <a href="#resto-list" class="hero-section__link"
        >lihat daftar restoran <i class="fas fa-utensils"></i
      ></a>
  </section>
    `;
  }
}

customElements.define('hero-view', HeroView);
