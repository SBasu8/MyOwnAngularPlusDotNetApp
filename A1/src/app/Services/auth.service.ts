
import { HttpClient } from '@angular/common/http';
import { Role } from './../Models/role';
import {Token} from './../Models/token';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  path: string = "https://localhost:44355/authservice/";
  constructor(private http: HttpClient) { }
  
  
  public Login(uname: string, pass: string):Observable<Token> {
    return this.http.get<Token>(this.path + "login?uname="+uname+"&pass="+pass);}
}
