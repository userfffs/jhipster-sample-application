import dayjs from 'dayjs/esm';

import { IEmployee, NewEmployee } from './employee.model';

export const sampleWithRequiredData: IEmployee = {
  id: 8899,
  firstName: 'Зоя',
  lastName: 'Зыков',
  email: 'Nadezhda93@hotmail.com',
  hireDate: dayjs('2025-02-26T14:29'),
};

export const sampleWithPartialData: IEmployee = {
  id: 16412,
  firstName: 'Евдокия',
  lastName: 'Крылов',
  email: 'Ratibor_Lapina51@yahoo.com',
  phoneNumber: 'phew preregister',
  hireDate: dayjs('2025-02-26T01:29'),
  salary: 26648,
  commissionPct: 1929,
  jobTitle: 'Ведущий логистический разработчик',
};

export const sampleWithFullData: IEmployee = {
  id: 19019,
  firstName: 'Самуил',
  lastName: 'Савельев',
  email: 'Cheslav54@gmail.com',
  phoneNumber: 'annex',
  hireDate: dayjs('2025-02-25T17:58'),
  salary: 24693,
  commissionPct: 15078,
  jobTitle: 'Центральный логистический помощник',
};

export const sampleWithNewData: NewEmployee = {
  firstName: 'Вадим',
  lastName: 'Власов',
  email: 'Aleksei.Rusakov92@mail.ru',
  hireDate: dayjs('2025-02-25T17:30'),
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
