import data from "../../DATA.json";

interface templateProps {
	id: string;
	name: string;
	description: string;
	pictureId: string;
	city: string;
	rating: number;
}

const doRate = (rate: number) => {
	const { fullStar, halfStar, noStar } = {
		fullStar: '<i class="fas fa-star"></i>',
		halfStar: '<i class="fas fa-star-half-alt"></i>',
		noStar: '<i class="far fa-star"></i>',
	};

	// logika reting
	let strTmp = "";
	//  - round ke bawah
	let roundedUpRate = Math.ceil(rate);
	let haveHalfStar = roundedUpRate - rate > 0;

	for (let i = 1; i < roundedUpRate; i++) {
		strTmp += fullStar;
	}

	//  - modulus ? + half star : empty star
	strTmp += haveHalfStar ? halfStar : noStar;

	// fill empty star
	for (let i = 0; i < 5 - roundedUpRate; i++) {
		strTmp += noStar;
	}

	return strTmp;
};

const listItemTemplate = ({
	id,
	city,
	description,
	name,
	pictureId,
	rating,
}: templateProps): string => `
<article class="card-item restourant">
						<div class="image-container">
							<img
								src="${pictureId}"
								alt="gambar restoran ${name}"
							/>
						</div>
						<div class="restourant-description">
							<h4 class="restourant-name">
								${name}
							</h4>
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
								<button aria-label="bagikan restoran ${name}" tabindex="-1">
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

const set_resto_list = async () => {
	const listContainer = document!.querySelector(".restourant-list");
	const { restaurants } = data;

	try {
		let tmpElm: string = "";
		await Promise.all(
			restaurants.map((restaurant, idx) => {
				tmpElm += listItemTemplate(restaurant);
			})
		).then(() => {
			if (listContainer) {
				listContainer.innerHTML = tmpElm;
			}
		});
	} catch (error) {
		console.log("Error: ", error);
	}
};

export default set_resto_list;
