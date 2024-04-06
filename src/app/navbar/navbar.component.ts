import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  showUsername!: boolean;
  username:string = '';
  class:number = 0;

  constructor(private router:Router){

  }

  ngOnInit(): void {
    this.displayUserCredentials();
  }

  displayUserCredentials():boolean {
    const username = sessionStorage.getItem('username');
    const classNumber = sessionStorage.getItem('class');
    if (username && classNumber){
      this.username = username;
      this.class = parseInt(classNumber);
      return true;
    }
    else{
      return false;
    }
  }

  logout():void{
    this.showUsername = false;
    sessionStorage.clear();
    this.router.navigate(['/home']);
  }

}
