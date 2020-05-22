import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constant } from '../utility/constant';
import { Orders } from '../models/orders';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) { }

  public getCustomerOrders(): Observable<Orders[]> {
        return this.http.get<Orders[]>(Constant.url + "orders");
  }

}
