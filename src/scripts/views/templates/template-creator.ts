/* eslint-disable no-tabs */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
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
			<a href="#${id}" aria-label="lihat detail restoran ${name}">
				<i class="fas fa-utensils"></i>
				Lihat</a
			>
		</div>
	</div>
	</article>`;

const createDetailItemTemplate = (): void => {};

export {
  createRestaurantItemTemplate,
  createDetailItemTemplate,
};
