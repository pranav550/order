import { NotificationService } from './../../../Shared/Services/notification.service';
import { Customers } from './../../../Shared/models/customers';
import { Router } from "@angular/router";
import { AuthService } from './../../../Shared/Services/auth.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isValidFormSubmitted: boolean = true
  @ViewChild('myForm') form: any;
  possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890,./;'[]\=-)(*&^%$#@!~`";
  lengthOfCode = 60;
  allUser: Customers[];
  msg: string;
  alertDisplay: boolean = false
  user: any = {
    email: '',
    password: ''
  };
  constructor(
    private auth: AuthService,
    private router: Router,
    private notifyService: NotificationService
  ) { }

  ngOnInit(): void { }

  // function for login
  public onSubmit(formObject): void {
    try {
      if (formObject?.invalid) {
        this.isValidFormSubmitted = false;
      }
      else {
        this.isValidFormSubmitted = true;
        this.auth.getAllUser().subscribe(res => {
          this.allUser = res
          this.allUser.filter(res => {
            if (res) {
              if (res.email == this.user.email && res.password == this.user.password) {
                this.makeRandom(this.lengthOfCode, this.possible);
                this.form.reset();
                this.router.navigate(['customers/card-view']);
                this.notifyService.showSuccess("Successfully Login !!", "Notification");
              }
              else {
                this.alertDisplay = true
                this.msg = "Invalid Credentials"
                setTimeout(() => {
                  this.alertDisplay = false
                }, 3000);
              }
            }

            else {
              ////////
            }
          })
        }, (err => {
          this.notifyService.showFail("Server Error !!", "Notification");
        }))

      }
    }
    catch (err) {
      console.log(err)
    }
  }
  // function for creating the random token
  public makeRandom(lengthOfCode: number, possible: string): void {
    let text = "";
    for (let i = 0; i < lengthOfCode; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    localStorage.setItem('randToken', JSON.stringify(text));
  }
}
