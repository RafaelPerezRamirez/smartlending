import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './components/courses/courses.component';
import { StudentsComponent } from './components/students/students.component';
import { NewStudentComponent } from './components/new-student/new-student.component';


const APP_ROUTES: Routes = [
  { path: 'courses', component: CoursesComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'newStudent/:id', component: NewStudentComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'students' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
