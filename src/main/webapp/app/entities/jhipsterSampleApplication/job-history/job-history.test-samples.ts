import dayjs from 'dayjs/esm';

import { IJobHistory, NewJobHistory } from './job-history.model';

export const sampleWithRequiredData: IJobHistory = {
  id: 16459,
  startDate: dayjs('2025-02-26T03:00'),
};

export const sampleWithPartialData: IJobHistory = {
  id: 11960,
  startDate: dayjs('2025-02-26T13:45'),
};

export const sampleWithFullData: IJobHistory = {
  id: 26932,
  startDate: dayjs('2025-02-26T07:39'),
  endDate: dayjs('2025-02-26T12:08'),
  language: 'GERMAN',
};

export const sampleWithNewData: NewJobHistory = {
  startDate: dayjs('2025-02-25T22:25'),
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
