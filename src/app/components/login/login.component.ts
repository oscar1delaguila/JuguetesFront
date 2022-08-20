import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {



  loginForm!: FormGroup;
  email!:FormControl;
  password!:FormControl;

  constructor(

    private formBuilder: FormBuilder,
    private router:Router

  ) {


    this.email = new FormControl('', [ Validators.required ]);
    this.password = new FormControl('', [Validators.required ]);


    this.loginForm = this.formBuilder.group({
      email: this.email,
      password: this.password
    });

   }

  ngOnInit(): void {
  }


  login() {

    this.router.navigateByUrl('perfil')
    

  }



}
