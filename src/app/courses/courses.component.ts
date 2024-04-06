import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses: any[] = [];
  constructor(private http: HttpClient,private router:Router) { }
  ngOnInit(): void {
    this.getCourse();
  }
  getCourse() {
    this.http.get<any[]>('http://localhost:3000/courses').subscribe({
      next: (res) => {
        this.courses = res;
      }
    })
  }
  viewNotes(id:number){
    this.router.navigate(['/individual-courses',id])
  }
}
