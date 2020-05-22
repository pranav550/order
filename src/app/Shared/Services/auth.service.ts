import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Constant } from "../utility/constant";
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public createLogin(user): Observable<any> {
    return this.http.post(Constant.url + "loginUser", user)
  }
  
  public getAllUser(): Observable<any> {
    return this.http.get(Constant.url + "loginUser")
  }

  public isUserLogin() {
    return localStorage.getItem('randToken')
  }

}
