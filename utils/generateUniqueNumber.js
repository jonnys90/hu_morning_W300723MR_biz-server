import { getCardByBizNumber } from "../model/dbAdapter.js";

function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

const generateUniqueNumber = async () => {
  try {
    let randomNumber;
    let card = {};
    let i = 0;
    const stopNumber = 29999997;
    while (card && i < stopNumber) {
      randomNumber = getRandomIntInclusive(1000000, 9999999);
      card = await getCardByBizNumber(randomNumber);
      i++;
    }
    if (i >= stopNumber) {
      throw new Error("random number not found");
    }
    return randomNumber;
  } catch (err) {
    return Promise.reject(err);
  }
};

export default generateUniqueNumber;
