import { Component, OnInit, Input } from '@angular/core';

import { Ship } from '../model/Ship.model';

@Component({
  selector: 'app-card-ship',
  templateUrl: './card-ship.component.html',
  styleUrls: ['./card-ship.component.css']
})
export class CardShipComponent implements OnInit {

  @Input() ship: Ship;

  constructor() { }

  ngOnInit() {
  }


}
