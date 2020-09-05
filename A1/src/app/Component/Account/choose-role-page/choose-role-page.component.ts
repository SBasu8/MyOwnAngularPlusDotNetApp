import { AccountService } from './../../../Services/account.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-choose-role-page',
  templateUrl: './choose-role-page.component.html',
  styleUrls: ['./choose-role-page.component.css']
})
export class ChooseRolePageComponent implements OnInit {

  constructor(private service: AccountService,private router: Router) { }

  ngOnInit(): void {
  }

  public Admin() { this.router.navigateByUrl('login'); }
  public User(){ this.router.navigateByUrl('login');}
}
