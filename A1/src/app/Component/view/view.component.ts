import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  message: string = "Welcome";

  uname: string;
  pass: string;
  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  submit(): void{

    this.router.navigateByUrl('login');
  }

}
