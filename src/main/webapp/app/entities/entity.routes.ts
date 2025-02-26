import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'region',
    data: { pageTitle: 'jhipsterSampleApplicationApp.jhipsterSampleApplicationRegion.home.title' },
    loadChildren: () => import('./jhipsterSampleApplication/region/region.routes'),
  },
  {
    path: 'country',
    data: { pageTitle: 'jhipsterSampleApplicationApp.jhipsterSampleApplicationCountry.home.title' },
    loadChildren: () => import('./jhipsterSampleApplication/country/country.routes'),
  },
  {
    path: 'location',
    data: { pageTitle: 'jhipsterSampleApplicationApp.jhipsterSampleApplicationLocation.home.title' },
    loadChildren: () => import('./jhipsterSampleApplication/location/location.routes'),
  },
  {
    path: 'department',
    data: { pageTitle: 'jhipsterSampleApplicationApp.jhipsterSampleApplicationDepartment.home.title' },
    loadChildren: () => import('./jhipsterSampleApplication/department/department.routes'),
  },
  {
    path: 'task',
    data: { pageTitle: 'jhipsterSampleApplicationApp.jhipsterSampleApplicationTask.home.title' },
    loadChildren: () => import('./jhipsterSampleApplication/task/task.routes'),
  },
  {
    path: 'employee',
    data: { pageTitle: 'jhipsterSampleApplicationApp.jhipsterSampleApplicationEmployee.home.title' },
    loadChildren: () => import('./jhipsterSampleApplication/employee/employee.routes'),
  },
  {
    path: 'job',
    data: { pageTitle: 'jhipsterSampleApplicationApp.jhipsterSampleApplicationJob.home.title' },
    loadChildren: () => import('./jhipsterSampleApplication/job/job.routes'),
  },
  {
    path: 'job-history',
    data: { pageTitle: 'jhipsterSampleApplicationApp.jhipsterSampleApplicationJobHistory.home.title' },
    loadChildren: () => import('./jhipsterSampleApplication/job-history/job-history.routes'),
  },
  /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
];

export default routes;
