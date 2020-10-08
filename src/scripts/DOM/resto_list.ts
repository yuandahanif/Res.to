import data from "../../DATA.json";
import doRate from "./rating";

interface templateProps {
	id: string;
	name: string;
	description: string;
	pictureId: string;
	city: string;
	rating: number;
}

const listItemTemplate = ({
	id,
	city,
	description,
	name,
	pictureId,
	rating,
}: templateProps): string => {
	return `<article class="card-item restourant">
	<div class="image-container">
		<img
			src="${pictureId}"
			alt="gambar restoran ${name}"
		/>
	</div>
	<div class="restourant-description">
		<h3 class="restourant-name">
			${name}
		</h3>
		<div class="rating">
			<div class="stars">
			${doRate(rating)}
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
};

const set_resto_list = async () => {
	const listContainer = document!.querySelector(".restourant-list");
	const { restaurants } = data;

	let tmpElm: string = "";
	Promise.all(
		restaurants.map((restaurant) => {
			tmpElm += listItemTemplate(restaurant);
		})
	).then(() => {
		if (listContainer) {
			listContainer.innerHTML = tmpElm;
		}
	});
};

export default set_resto_list;
