import { Component, OnInit, ViewChild } from '@angular/core';
import { Orders, Product } from 'src/app/Shared/models/orders';
import { Customers } from 'src/app/Shared/models/customers';
import { CustomerService } from 'src/app/Shared/Services/customer.service';
import { OrdersService } from 'src/app/Shared/Services/orders.service';

@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.css']
})
export class ViewOrdersComponent implements OnInit {
  currentUserId: any;
  orders: Orders[] = [];
  myID: number = 2;
  products: Product[] = [];
  priceTotal: number = 0;
  productPrice: number;
  user: any = {
    name: '',
  }

  @ViewChild('myForm') form: any;
  
  constructor(private ordersService: OrdersService, private customersService: CustomerService) { }

  ngOnInit(): void {
    this.getCustomerDetails();
  }

  public getCustomerDetails(): void {
    this.customersService.getSelectedId.subscribe(resp => {
      this.currentUserId = resp['id'];
      this.user = resp;
     if (this.currentUserId >= 1) {
        this.getCustomerOrders();
      }
    });
  }

  public getCustomerOrders(): void {
    this.ordersService.getCustomerOrders().subscribe(resp => {
      this.orders = resp.filter(r => { return r["userId"] == this.currentUserId })
      this.products = this.orders[0].products;
      for (let i = 0; i < this.products.length; i++) {
        this.productPrice = +this.products[i].price;
        this.priceTotal = this.priceTotal + this.productPrice;
      };
    });
  }

}
