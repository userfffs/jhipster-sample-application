import { IJob, NewJob } from './job.model';

export const sampleWithRequiredData: IJob = {
  id: 7159,
  jobTitle: 'Центральный интеграционный координатор',
};

export const sampleWithPartialData: IJob = {
  id: 11725,
  jobTitle: 'Международный оптимизационный аналитик',
  minSalary: 11441,
};

export const sampleWithFullData: IJob = {
  id: 8575,
  jobTitle: 'Региональный операционный сотрудник',
  minSalary: 27956,
  maxSalary: 12551,
};

export const sampleWithNewData: NewJob = {
  jobTitle: 'Региональный маркетинговый сотрудник',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
