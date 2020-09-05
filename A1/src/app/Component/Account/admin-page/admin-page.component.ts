import { GetDataService } from './../../../Services/get-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  uname: string = localStorage.getItem("uname");
  token: string = localStorage.getItem("token");
  message: string;

  constructor(private getDataService: GetDataService ) { }

  ngOnInit(): void {
  }

  getAdminData(){
    this.getDataService.getAdminData().subscribe(res=>{
        this.message = res;

    })
  }

}
