import { Component, OnInit } from '@angular/core';
import { Customers } from '../../../Shared/models/customers';
import { CustomerService } from '../../../Shared/Services/customer.service';
import { NotificationService } from 'src/app/Shared/Services/notification.service';
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {

  listCustomer: Customers[];
  errorMsg: string;
  totalRecords: number;
  errorFlag: boolean= false;
  page: number = 1;
  // searchText: any;
  // result:any;

  constructor(private customerService: CustomerService,
    private notifyService: NotificationService,
    private spinner: NgxSpinnerService,
    private router: Router) { }

  ngOnInit(): void {
    this.getCustomerList();
  }
 
  public getCustomerList() {
    try {
      this.spinner.show();
      this.customerService.getCardViewCustomer().subscribe((res) => {
        if (res) {
          if (res.length == 0) {
            this.errorMsg = "No Customer Found";
            this.errorFlag = true;
            setTimeout(() => {
              this.spinner.hide();
            }, 2000);
          }
          else {
            this.errorMsg = ""
            this.spinner.hide();
            this.listCustomer = res
            this.totalRecords = res.length;
          }

        } else {
          ////
        }
      },

      (error) => { this.errorMsg = error });
    }
    catch (err) {
      this.errorMsg = err
    }
  }

  // funtion for delete 
  public deleteCustomer(customer: Customers): void {
    this.customerService.deleteCustomer(+customer.id).subscribe(
      data => {
        this.listCustomer = this.listCustomer.filter(u =>
          u !== customer),
          this.notifyService.showFail("Customer Deleted Successfully !!", "Notification");
      }
    );
  }
  // function to go to edit
  public getCustomer(user): void {
    this.router.navigate(['/customers/edit-customer']);
    this.customerService.selectedId.next(user);
  }
}
