import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private http: HttpClient) { }

  signup(body: any):Observable<any> {
   return this.http.post<any>('http://localhost:3000/userdetails', body)
  }

  login(username: string, password: string) {
    return this.http.get<any>('http://localhost:3000/userdetails', {
      params: {
        username: username,
        password: password
      }
    });
  }

}
