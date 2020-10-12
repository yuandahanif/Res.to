/* eslint-disable no-plusplus */
const doRate = (rate: number): string => {
  const { fullStar, halfStar, noStar } = {
    fullStar: '<i class="fas fa-star"  tabindex="-1"></i>',
    halfStar: '<i class="fas fa-star-half-alt"  tabindex="-1"></i>',
    noStar: '<i class="far fa-star"  tabindex="-1"></i>',
  };

  // logika reting
  let strTmp = '';
  //  - round ke atas
  const roundedUpRate = Math.ceil(rate);
  const haveHalfStar = roundedUpRate - rate > 0;

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

export default doRate;
