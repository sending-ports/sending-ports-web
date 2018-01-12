import { Observable } from 'rxjs/Observable';
import { ShipService } from './../service/ship.service';

import { Component, OnInit } from '@angular/core';
import { Ship } from "../model/Ship.model";

@Component({
  selector: 'app-ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.css']
})
export class ShipComponent implements OnInit {

  private ships: Ship[];
  private shipsObservable: Observable<Ship[]>;

  constructor(private shipService: ShipService) { }

  ngOnInit() {
  }



}
