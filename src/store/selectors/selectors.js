import {createSelector} from "reselect";


export const getOffers = (state) => {
  return [...state[`externalData`].offers];
};


export const getCity = (state) => {
  return state[`localData`].city;
};

export const getId = (id) => {
  return id;
};

export const getCityList = createSelector(
    getOffers,
    (offers) => {
      const citiesList = offers.map((offer) => offer.city.name);
      return Array.from(new Set(citiesList));
    }
);

export const getCityOffers = createSelector(
    getOffers,
    getCity,
    (offers, city) => offers.filter((offer) => offer.city.name === city)
);

export const getFavoriteOffers = createSelector(
    getOffers,
    (offers) => offers.filter((offer) => offer.isFavorite === true)
);

export const getFavoriteCityList = createSelector(
    getFavoriteOffers,
    (offers) => {
      const citiesList = offers.map((offer) => offer.city.name);
      return Array.from(new Set(citiesList));
    }
);


export const getFilteredOffers = createSelector(
    getOffers,
    getCityList,
    (offers, cities) => cities.map((it) => {
      const filteredOffers = offers.filter((offer) => offer.city.name === it);
      return Object.assign({}, {city: it, offers: filteredOffers});
    })
);


export const getSmallHotelsList = (offers, id) =>{
  const listResult = [];
  const city = offers[id - 1].city.name;
  const lists = offers.filter((offer) => offer.city.name === city);
  const maxLength = lists.length < 4 ? lists.length : 4;
  for (let i = 0; i < maxLength; i++) {
    if (lists[i].id === id) {
      continue;
    }
    if (lists[i]) {
      listResult.push(lists[i]);
    }
  }
  if (listResult.length > 3) {
    return listResult.slice(0, 2);
  }
  return listResult;
};

const SortName = {
  POPULAR: `Popular`,
  PRICE_LH: `Price: low to high`,
  PRICE_HL: `Price: high to low`,
  TOP_RATED: `Top rated first`
};

export const sortOfferList = (offers, sortName) => {
  switch (sortName) {
    case SortName.POPULAR:
      return offers.slice();
    case SortName.PRICE_LH:
      return offers.slice().sort((prev, curr) => prev.cost - curr.cost);
    case SortName.PRICE_HL:
      return offers.slice().sort((prev, curr) => curr.cost - prev.cost);
    case SortName.TOP_RATED:
      return offers.slice().sort((prev, curr) => curr.rating - prev.rating);
    default:
      return new Error(`Undefined SortName element`);
  }
};


