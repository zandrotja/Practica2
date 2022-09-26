import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url:any;

  constructor(private router:Router, private http:HttpClient) { 

    this.url = environment.baseUrl+"token";
  }
  login(formData:any){
    return this.http.post<any>(this.url,formData);
  }
}
