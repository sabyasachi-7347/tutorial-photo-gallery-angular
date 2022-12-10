import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username:any="";
  password:any="";
  constructor(public router:Router) {
    
   }

   goto(){
    this.router.navigate(['tabs']);
   }

  ngOnInit() {
  }

}
