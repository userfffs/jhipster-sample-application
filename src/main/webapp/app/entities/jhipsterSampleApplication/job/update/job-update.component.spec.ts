import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpResponse, provideHttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subject, from, of } from 'rxjs';

import { ITask } from 'app/entities/jhipsterSampleApplication/task/task.model';
import { TaskService } from 'app/entities/jhipsterSampleApplication/task/service/task.service';
import { JobService } from '../service/job.service';
import { IJob } from '../job.model';
import { JobFormService } from './job-form.service';

import { JobUpdateComponent } from './job-update.component';

describe('Job Management Update Component', () => {
  let comp: JobUpdateComponent;
  let fixture: ComponentFixture<JobUpdateComponent>;
  let activatedRoute: ActivatedRoute;
  let jobFormService: JobFormService;
  let jobService: JobService;
  let taskService: TaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [JobUpdateComponent],
      providers: [
        provideHttpClient(),
        FormBuilder,
        {
          provide: ActivatedRoute,
          useValue: {
            params: from([{}]),
          },
        },
      ],
    })
      .overrideTemplate(JobUpdateComponent, '')
      .compileComponents();

    fixture = TestBed.createComponent(JobUpdateComponent);
    activatedRoute = TestBed.inject(ActivatedRoute);
    jobFormService = TestBed.inject(JobFormService);
    jobService = TestBed.inject(JobService);
    taskService = TestBed.inject(TaskService);

    comp = fixture.componentInstance;
  });

  describe('ngOnInit', () => {
    it('Should call Task query and add missing value', () => {
      const job: IJob = { id: 29383 };
      const tasks: ITask[] = [{ id: 25192 }];
      job.tasks = tasks;

      const taskCollection: ITask[] = [{ id: 25192 }];
      jest.spyOn(taskService, 'query').mockReturnValue(of(new HttpResponse({ body: taskCollection })));
      const additionalTasks = [...tasks];
      const expectedCollection: ITask[] = [...additionalTasks, ...taskCollection];
      jest.spyOn(taskService, 'addTaskToCollectionIfMissing').mockReturnValue(expectedCollection);

      activatedRoute.data = of({ job });
      comp.ngOnInit();

      expect(taskService.query).toHaveBeenCalled();
      expect(taskService.addTaskToCollectionIfMissing).toHaveBeenCalledWith(
        taskCollection,
        ...additionalTasks.map(expect.objectContaining),
      );
      expect(comp.tasksSharedCollection).toEqual(expectedCollection);
    });

    it('Should update editForm', () => {
      const job: IJob = { id: 29383 };
      const task: ITask = { id: 25192 };
      job.tasks = [task];

      activatedRoute.data = of({ job });
      comp.ngOnInit();

      expect(comp.tasksSharedCollection).toContainEqual(task);
      expect(comp.job).toEqual(job);
    });
  });

  describe('save', () => {
    it('Should call update service on save for existing entity', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<IJob>>();
      const job = { id: 30796 };
      jest.spyOn(jobFormService, 'getJob').mockReturnValue(job);
      jest.spyOn(jobService, 'update').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ job });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.next(new HttpResponse({ body: job }));
      saveSubject.complete();

      // THEN
      expect(jobFormService.getJob).toHaveBeenCalled();
      expect(comp.previousState).toHaveBeenCalled();
      expect(jobService.update).toHaveBeenCalledWith(expect.objectContaining(job));
      expect(comp.isSaving).toEqual(false);
    });

    it('Should call create service on save for new entity', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<IJob>>();
      const job = { id: 30796 };
      jest.spyOn(jobFormService, 'getJob').mockReturnValue({ id: null });
      jest.spyOn(jobService, 'create').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ job: null });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.next(new HttpResponse({ body: job }));
      saveSubject.complete();

      // THEN
      expect(jobFormService.getJob).toHaveBeenCalled();
      expect(jobService.create).toHaveBeenCalled();
      expect(comp.isSaving).toEqual(false);
      expect(comp.previousState).toHaveBeenCalled();
    });

    it('Should set isSaving to false on error', () => {
      // GIVEN
      const saveSubject = new Subject<HttpResponse<IJob>>();
      const job = { id: 30796 };
      jest.spyOn(jobService, 'update').mockReturnValue(saveSubject);
      jest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ job });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving).toEqual(true);
      saveSubject.error('This is an error!');

      // THEN
      expect(jobService.update).toHaveBeenCalled();
      expect(comp.isSaving).toEqual(false);
      expect(comp.previousState).not.toHaveBeenCalled();
    });
  });

  describe('Compare relationships', () => {
    describe('compareTask', () => {
      it('Should forward to taskService', () => {
        const entity = { id: 25192 };
        const entity2 = { id: 22244 };
        jest.spyOn(taskService, 'compareTask');
        comp.compareTask(entity, entity2);
        expect(taskService.compareTask).toHaveBeenCalledWith(entity, entity2);
      });
    });
  });
});
