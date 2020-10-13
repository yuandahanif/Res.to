import SimpleComponent from './component.interface';

class SkipToContent extends HTMLElement implements SimpleComponent {
  render(): void {
    this.innerHTML = `
    <a href="#resto-list" class="skip-link">Menuju ke konten</a>
    `;
  }

  connectedCallback(): void {
    this.render();
  }
}

customElements.define('skip-to-content', SkipToContent);
