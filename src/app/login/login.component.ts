import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
} from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {
  signinForm!: FormGroup;
  username!: FormControl;
  Password!: FormControl;
  hide = true;
 
  constructor(
    private router: Router,
    private authService: AuthService,
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
    this.signInFormLoad();
  }

  signInFormLoad() {
    this.username = new FormControl('', [Validators.required]);
    this.Password = new FormControl('', [Validators.required]);
    this.signinForm = new FormGroup({
      username: this.username,
      password: this.Password,
    });
  }

  onSubmit() {
    this.authService.login(this.username.value, this.Password.value).subscribe({
      next: (res) => {
        if(res){
          this.signinForm.reset();
          sessionStorage.setItem('username',res[0].username);
          sessionStorage.setItem('class',res[0].class);
          this.messageService.add({severity:"success",summary:"Success",detail:"Login Successful"})
          this.router.navigate(['/courses'])
        }  
      },
      error:()=>{
        this.messageService.add({severity:"error",summary:"Error",detail:"Login Failed"})
      }
    })
  }

}
