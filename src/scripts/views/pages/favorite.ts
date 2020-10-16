/* eslint-disable no-tabs */
class Favorite {
  static async render() {
    return `
      <div class="favorite-container">
				<h1>Daftar restoran favorit anda</h1>

				<div class="card-container" id="resto-list">

					
				</div>
			</div>`;
  }

  static async afterRender() {
    return '';
  }
}

export default Favorite;
