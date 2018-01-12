import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShipService } from '../service/ship.service';
import { Ship } from '../model/Ship.model';
import { ISubscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private ships: Ship[];
  private shipSubscription: ISubscription;

  constructor(private shipService: ShipService) { 
    this.shipSubscription = this.shipService.shipObservable.subscribe((data) => {
      this.ships = data;
    })
  }

  ngOnInit() {
    this.shipService.setShipsSubject('');
  }

  ngOnDestroy() {
    this.shipSubscription.unsubscribe();
  }

}
