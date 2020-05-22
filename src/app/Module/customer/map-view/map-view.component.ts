import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit {
  lat: number = 17.4435;
  lng: number = 78.3772;

  constructor() { }

  ngOnInit(): void {
  }

}
