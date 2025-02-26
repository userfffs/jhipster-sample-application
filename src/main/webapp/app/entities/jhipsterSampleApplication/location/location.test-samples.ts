import { ILocation, NewLocation } from './location.model';

export const sampleWithRequiredData: ILocation = {
  id: 12482,
  city: 'Калач-на-Дону',
};

export const sampleWithPartialData: ILocation = {
  id: 24285,
  postalCode: 'mmm modulo equate',
  city: 'Баргузин',
  stateProvince: 'mosh',
};

export const sampleWithFullData: ILocation = {
  id: 22007,
  streetAddress: 'abseil given',
  postalCode: 'underneath emerge excluding',
  city: 'Камышлов',
  stateProvince: 'viciously duh against',
};

export const sampleWithNewData: NewLocation = {
  city: 'Великие Луки',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
