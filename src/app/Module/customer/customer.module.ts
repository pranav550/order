import { FormsModule } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardViewComponent } from './card-view/card-view.component';
import { Routes, RouterModule } from '@angular/router';
import { CustomerHeaderComponent } from './customer-header/customer-header.component';
import { ListViewComponent } from './list-view/list-view.component';
import { MapViewComponent } from './map-view/map-view.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import { ViewOrdersComponent } from './view-orders/view-orders.component';
import { CustomerHeader2Component } from './customer-header2/customer-header2.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { NgxSpinnerModule } from "ngx-spinner";
import { ToastrModule } from 'ngx-toastr';
const routes: Routes = [
  {
    path: '', children: [
      { path: 'card-view', component: CardViewComponent },
      { path: 'list-view', component: ListViewComponent },
      { path: 'map-view', component: MapViewComponent },

      { path: 'add-customer', component: AddCustomerComponent },
    ], component: CustomerHeaderComponent,
  },
  {
    path: '', children: [
      { path: 'customer-details', component: CustomerDetailsComponent },
      { path: 'view-orders', component: ViewOrdersComponent },
      { path: 'edit-customer', component: EditCustomerComponent },
    ], component: CustomerHeader2Component
  }

];

@NgModule({
  declarations: [CardViewComponent, CustomerHeaderComponent, ListViewComponent, MapViewComponent, AddCustomerComponent, ViewOrdersComponent, CustomerHeader2Component, EditCustomerComponent, CustomerDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    AgmCoreModule,
    HttpClientModule,
    NgxPaginationModule,
    TypeaheadModule,
    NgxSpinnerModule,
    ToastrModule.forRoot(),
    RouterModule.forChild(routes),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CustomerModule { }
