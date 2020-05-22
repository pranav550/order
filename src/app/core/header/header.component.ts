import { AuthService } from './../../Shared/Services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isUserLogin: boolean = false;
  constructor(private router: Router, public auth: AuthService) { }

  ngOnInit(): void { }

  // function for logout
  public logout():void {
    localStorage.removeItem('randToken');
    this.router.navigate(['login']);
  }

}
