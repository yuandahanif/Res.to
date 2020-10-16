/* eslint-disable no-tabs */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import {
  categoryListItem, drinkListItems, foodListItems, reviewListItems,
} from '../../components/detail-component-template';
import API_ENDPOINT from '../../globals/api-endpoint';
import numberToStarRating from '../../utils/rating';

interface templateProps {
	id: string;
	name: string;
	description: string;
	pictureId: string;
	city: string;
	rating: number;
}

const createRestaurantItemTemplate = ({
  id,
  city,
  description,
  name,
  pictureId,
  rating,
}: templateProps): string => `<article class="card-item restourant">
	<div class="image-container">
		<img
			src="${API_ENDPOINT.MEDIUM_IMAGE(pictureId)}"
			alt="gambar restoran ${name}"
		/>
	</div>
	<div class="restourant-description">
		<h3 class="restourant-name">
			${name}
		</h3>
		<div class="rating">
			<div class="stars">
			${numberToStarRating(rating)}
			</div>
			<span class="rating-number">${rating}</span>
			</div>
			<span class="city"> <i class="fas fa-map-marker-alt "></i> ${city}</span>
		<div class="description">
			<p>
				${description}
			</p>
		</div>
	</div>
	<div class="action">
		<div class="action__share">
			<button aria-label="bagikan restoran ${name}">
				<i class="fas fa-share-square"></i>
				Bagikan
			</button>
		</div>
		<div class="action__detail">
			<a href="#/detail/${id}" aria-label="lihat detail restoran ${name}">
				<i class="fas fa-utensils"></i>
				Lihat</a
			>
		</div>
	</div>
	</article>`;

const createDetailItemTemplate = (restaurant: any): string => `
<!-- image | description(nama, rating, kota, kategori) -->
<section class="row desc-top-section">
	<div class="col desc-top-left">
		<figure>
			<img
				src="${API_ENDPOINT.MEDIUM_IMAGE(restaurant.pictureId)}"
				alt="Nama restoran"
			/>
		</figure>
	</div>
	<div class="col desc-top-right">
		<h1 class="desc-name">${restaurant.name
}</h1>
		<div class="rating"><span class="stars">${numberToStarRating(restaurant.rating)}</span> <span> ${restaurant.rating}</span></div>
		<div class="desc-address"><span><i class="fas fa-map-marker-alt"></i> ${restaurant.address} | <i class="fas fa-city"></i> ${restaurant.city}</span></div>
		
		<div class="desc-category">
		${categoryListItem(restaurant.categories)}
		</div>
	</div>
</section>

<!-- deskripsi panjang -->
<section class="desc-down-section">
	<p>
	${restaurant.description}
	</p>
</section>

<!-- menu list(makan dan minum) -->
<section class="menu-list-section" id="resto-list">
	<div class="food-list">
		<h2>Daftar Makanan</h2>
		<div class="card-container" role="list">
			${foodListItems(restaurant.menus.foods)}
		</div>
	</div>

	<div class="drink-list">
		<h2>Daftar Minuman</h2>

		<div class="card-container">
			${drinkListItems(restaurant.menus.drinks)}
		</div>
	</div>
</section>

<!-- review -->
<section class="review-section">
	<h2>Review pengguna</h2>

	<div class="card-container">
			${reviewListItems(restaurant.consumerReviews)}
	</div>
</section>
<!-- tulis review -->
<section class="add-review-section">
	<form action="#">
		<div class="input-group">
			<label for="nama">Nama</label>
			<input type="text" placeholder="Nama anda" name="nama" id="nama" />
		</div>
		<div class="input-group">
			<label for="review">Pendapat</label>
			<textarea
				name="review"
				id="review"
				rows="5"
				placeholder="Pendapat anda"
			></textarea>
		</div>
		<button type="submit">kirim review</button>
	</form>
</section>
`;

export {
  createRestaurantItemTemplate,
  createDetailItemTemplate,
};
