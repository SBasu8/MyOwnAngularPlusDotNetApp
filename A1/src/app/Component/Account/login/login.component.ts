import { AuthService } from './../../../Services/auth.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  uname: string;
  pass: string;
  constructor(private service : AuthService, private router : Router) { }

  ngOnInit(): void {
  }

  Login()
  {/*
    console.log(this.service.Login(this.uname, this.pass));
    this.router.navigateByUrl("adminpage");*/
    
      this.service.Login(this.uname, this.pass).subscribe(res => {
        console.log(res);
        if(res.token == "" || res.token==null)
        {console.log("Invalid Creds")}
        else
        {
          localStorage.setItem('uname', res.name);
          localStorage.setItem('token', res.token);
          console.log(res);
          this.router.navigateByUrl('adminpage');
        }
      });
      

  }

}
