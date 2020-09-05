import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Role} from '../Models/role';
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  path: string = "https://localhost:44355/authservice";
  constructor(private http: HttpClient) { }
  public AddRole(item: Role) {return this.http.post( this.path + "signup", item);}
}
