import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-individual-course-topics',
  templateUrl: './individual-course-topics.component.html',
  styleUrls: ['./individual-course-topics.component.css']
})
export class IndividualCourseTopicsComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient, private route: Router) { }
  param: string = '';
  topics: any[] = [];
  ngOnInit(): void {
    this.param = this.activatedRoute.snapshot.params['topicid'];
   this.getTopics();
  }

  getTopics() {
    this.http.get<any[]>(`http://localhost:3000/topics?topicid=${this.param}`).subscribe({
      next: (res) => {
        this.topics = res
      }
    })
  }
}
