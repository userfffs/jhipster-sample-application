import { ICountry, NewCountry } from './country.model';

export const sampleWithRequiredData: ICountry = {
  id: 30729,
  countryName: 'deep since troubled',
};

export const sampleWithPartialData: ICountry = {
  id: 14020,
  countryName: 'boohoo when',
};

export const sampleWithFullData: ICountry = {
  id: 28151,
  countryName: 'fooey fooey coil',
};

export const sampleWithNewData: NewCountry = {
  countryName: 'abaft famously what',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
