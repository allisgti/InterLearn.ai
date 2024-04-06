import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/services/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [MessageService]
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  username!: FormControl;
  Email!: FormControl;
  Password!: FormControl;
  class!: FormControl;
  syllabus!: FormControl;
  hide = true;
  

  constructor( private messageService: MessageService, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.signUpFormLoad();
  }

  onSubmit(): void {
    this.authService.signup(this.signupForm.value).subscribe({
      next:()=>{
        this.signupForm.reset();
        this.router.navigate(['login'])
        this.messageService.add({severity:"success",summary:"Success",detail:"Signup Successful"})
      },
      error:()=>{
        this.messageService.add({severity:"error",summary:"Error",detail:"Signup Failed"})
      }
    })
  }

  signUpFormLoad() {
    this.username = new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z]{3,}$/),
    ]);
    this.Email = new FormControl('', [Validators.required, Validators.email, Validators.pattern("^[A-Za-z0-9._%+-]+@\.com$"
    )]);
    this.Password = new FormControl('', [
      Validators.required,
      Validators.pattern(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{6,}$/
      ),
    ]);
    this.class = new FormControl('', [
      Validators.required,
    ]);
    this.syllabus = new FormControl('', [
      Validators.required,
    ]);
    this.signupForm = new FormGroup({
      username: this.username,
      email: this.Email,
      password: this.Password,
      class: this.class,
      syllabus: this.syllabus
    });
  }


}
