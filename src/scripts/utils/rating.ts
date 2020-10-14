/* eslint-disable no-plusplus */
const doRate = (rate: number): string => {
  const { fullStar, halfStar, noStar } = {
    fullStar: '<i class="fas fa-star"  tabindex="-1"></i>',
    halfStar: '<i class="fas fa-star-half-alt"  tabindex="-1"></i>',
    noStar: '<i class="far fa-star"  tabindex="-1"></i>',
  };

  // logika reting
  let strTmp = '';
  //  - round ke bawah
  const roundedDown = Math.floor(rate);
  const haveHalfStar = rate - roundedDown > 0;

  for (let i = 0; i < roundedDown; i++) {
    strTmp += fullStar;
  }

  //  - modulus ? + half star : empty star
  strTmp += haveHalfStar ? halfStar : '';

  // fill empty star
  const noStarCount = roundedDown + (haveHalfStar ? 1 : 0);
  // console.log('noStarCount', roundedDown + (halfStar ? 1 : 0));
  if (noStarCount <= 5) {
    for (let i = noStarCount; i < 5; i++) {
      strTmp += noStar;
    }
  }

  return strTmp;
};

export default doRate;
