import { ITask, NewTask } from './task.model';

export const sampleWithRequiredData: ITask = {
  id: 9181,
  title: 'or consequently',
};

export const sampleWithPartialData: ITask = {
  id: 20483,
  title: 'positively really whoa',
  description: 'incidentally',
};

export const sampleWithFullData: ITask = {
  id: 13396,
  title: 'where wherever',
  description: 'but than',
};

export const sampleWithNewData: NewTask = {
  title: 'expostulate',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
