import { Customers } from './../models/customers';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from "../utility/constant";
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

 public  getCardViewCustomer(): Observable<Customers[]> {
    return this.http.get<Customers[]>(Constant.url + "users")
      .pipe(catchError(this.errorHandler));
  }

  public updateCardViewCustomer(id: number, user): Observable<Customers[]> {
    return this.http.put<Customers[]>(Constant.url + "users" + "/" + id, user)
  }

  public createUser(user): Observable<Customers[]> {
    return this.http.post<Customers[]>(Constant.url + "users", user)
  }

  public createCustomer(customersInfo: Customers) {
    return this.http.post(Constant.url + "users", customersInfo);
  }

  selectedId = new BehaviorSubject([]);
  getSelectedId = this.selectedId.asObservable();


  public deleteCustomer(id: number) {
    return this.http.delete<Customers[]>(Constant.url + "users" + '/' + id);
  }

  public errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    //window.alert(errorMessage);
    return throwError(errorMessage);
  }


}
