import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  loginForm!: FormGroup;

  constructor( private authservice:AuthService,private router:Router,private formBuilder:FormBuilder) {

   }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      email:['',[Validators.required]],
      password:['',[Validators.required]],
    })
  }

  ingresar(): void{

      alert("Bienvenido al sistema")
      this.router.navigate(['/dashboard']);
      console.log(this.loginForm.value);
    // this.authservice.login(this.loginForm).subscribe((data:any)=>{
    //   this.router.navigate(['/dashboard']);

    // }),
    // (error:any)=>{
    //   alert(error.error);

    // };
    
  }

}
