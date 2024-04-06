import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'interlearn-AI';
  constructor(private router: Router,private messageService:MessageService) { }
  ngOnInit(): void {
    this.router.navigate(['/home']);
    this.messageService.add({severity:"success",summary:"Success",detail:"Login Successful"})

  }
}
