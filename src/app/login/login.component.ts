 import { Component, OnInit } from '@angular/core';
 import { FormControl, FormGroup,Validators } from '@angular/forms';
 import { Router } from '@angular/router';
 @Component({
   selector: 'app-login',
   templateUrl: './login.component.html',
   styleUrls: ['./login.component.css']
 })
 export class LoginComponent implements OnInit {
   loginForm=new FormGroup({
     email: new FormControl('',Validators.required),
     password: new FormControl('')
   })
   get email(){return this.loginForm.get('email')}
     loginMode:boolean=true
   constructor(private router:Router) { }
   goToPage(pageName:string):void{
     this.router.navigate([`${pageName}`]);
   }

   ngOnInit(): void {
   }
   myimage:string="assets/images/pharma2.jpg";
 }

