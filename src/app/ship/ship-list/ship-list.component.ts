import { ShipService } from './../../service/ship.service';
import { Component, OnInit } from '@angular/core';
import { Ship } from "../../model/Ship.model";
import { Observable } from "rxjs/Rx";

@Component({
  selector: 'app-ship-list',
  templateUrl: './ship-list.component.html',
  styleUrls: ['./ship-list.component.css']
})
export class ShipListComponent implements OnInit {

  private ships: Ship[];
  private shipsObservable: Observable<Ship[]>;

  constructor(private shipService: ShipService) { }

  ngOnInit() {
    this.getShips();
  }

  getShips() {
    this.shipsObservable = this.shipService.getShips();
  }

}
