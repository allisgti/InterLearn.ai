import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-individual-course',
  templateUrl: './individual-course.component.html',
  styleUrls: ['./individual-course.component.css']
})
export class IndividualCourseComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient, private route: Router) { }
  param: string = '';
  chapters: any[] = [];
  ngOnInit(): void {
    this.param = this.activatedRoute.snapshot.params['id'];
    this.getChapters();
  }

  getChapters() {
    this.http.get<any[]>(`http://localhost:3000/chapters?courseid=${this.param}`).subscribe({
      next: (res) => {
        this.chapters = res
      }
    })
  }

  viewTopics(topicid: string) {
    this.route.navigate(['/individual-course-topics', topicid])
  }
}
