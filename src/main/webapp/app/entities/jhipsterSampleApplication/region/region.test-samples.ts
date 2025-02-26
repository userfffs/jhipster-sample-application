import { IRegion, NewRegion } from './region.model';

export const sampleWithRequiredData: IRegion = {
  id: 20776,
  regionName: 'next past sit',
};

export const sampleWithPartialData: IRegion = {
  id: 16206,
  regionName: 'immediate tank downshift',
};

export const sampleWithFullData: IRegion = {
  id: 32233,
  regionName: 'a',
};

export const sampleWithNewData: NewRegion = {
  regionName: 'towards motor blah',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
