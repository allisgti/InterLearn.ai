import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { CoursesComponent } from './courses/courses.component';
import { IndividualCourseComponent } from './individual-course/individual-course.component';
import { IndividualCourseTopicsComponent } from './individual-course-topics/individual-course-topics.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'courses',
    component: CoursesComponent,
  },
  {
    path: 'individual-courses/:id',
    component: IndividualCourseComponent
  },
  {
    path:'individual-course-topics/:topicid',
    component:IndividualCourseTopicsComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
