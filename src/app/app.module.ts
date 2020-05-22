import { MyInterceptor } from './Shared/interceptors/my.interceptor';
import { CustomerModule } from './Module/customer/customer.module';
import { AuthModule } from './Module/auth/auth.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { Constant } from './Shared/utility/constant';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
// import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,
    FormsModule,
    CustomerModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,

    AgmCoreModule.forRoot({
      apiKey: Constant.googleKey,
      libraries: ['places']
    })
    // AgmJsMarkerClustererModule
  ],

  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
