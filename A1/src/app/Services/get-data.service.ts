import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  path: string = "https://localhost:44355/samplems";
  data: string;
  constructor(private http: HttpClient) { }
  getAdminData(): Observable<any>{
    return this.http.get(this.path+"/admin");
  }
}
