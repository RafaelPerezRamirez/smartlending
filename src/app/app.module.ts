import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { APP_ROUTING } from './app.routes';

//Services
import { SmartLendingService } from './services/smart-lending.service';

//Components
import { AppComponent } from './app.component';
import { CoursesComponent } from './components/courses/courses.component';
import { StudentsComponent } from './components/students/students.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NewStudentComponent } from './components/new-student/new-student.component';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    StudentsComponent,
    NavbarComponent,
    NewStudentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    APP_ROUTING
  ],
  providers: [
      SmartLendingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
