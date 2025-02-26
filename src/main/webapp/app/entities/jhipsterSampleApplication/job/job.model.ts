import { ITask } from 'app/entities/jhipsterSampleApplication/task/task.model';

export interface IJob {
  id: number;
  jobTitle?: string | null;
  minSalary?: number | null;
  maxSalary?: number | null;
  tasks?: Pick<ITask, 'id' | 'title'>[] | null;
}

export type NewJob = Omit<IJob, 'id'> & { id: null };
