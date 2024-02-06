//ilan v 👍

const normalizeCards = (cards) => {
  let image = {
    url: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    alt: "Business card image",
  };
  if (cards.image && cards.image.url) {
    image.url = cards.image.url;
  }
  if (cards.image && cards.image.alt) {
    image.alt = cards.image.alt;
  }
  return {
    ...cards,
    image,
    address: {
      ...cards.address,
      state: cards.address.state || undefined,
    },
    web: cards.web || undefined,
    zip: cards.zip || undefined,
    bizNumber: cards.bizNumber || undefined,
  };
};

export default normalizeCards;
