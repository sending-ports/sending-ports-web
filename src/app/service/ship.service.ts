import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Ship } from '../model/Ship.model';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Subject } from 'rxjs';

@Injectable()
export class ShipService {

  private shipsSubject = new Subject<string>();
  public shipObservable: Observable<Ship[]>;

  constructor(private http: Http) {

    this.shipObservable = this.shipsSubject
      .debounceTime(500)
      .distinctUntilChanged()
      .switchMap((name: string) => {

        if (name.trim() === "") {
          return this.getShips();
        }

        return this.getShipsByName(name);
      });

  }

  private getOptions(): RequestOptions {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return options;
  }

  createShip(ship: Ship): Observable<Response> {
    return this.http.post('http://localhost:3002/ship', ship, this.getOptions())
      .map(response => response)
      .catch(this.handleErrorObservable);
  }

  getShips(): Observable<Ship[]> {
    return this.http.get('http://localhost:3002/ship').map(response => {
      return response.json();
    });
  }

  getShipsByName(name: string): Observable<Ship[]> {
    return this.http.get(`http://localhost:3000/ships?name_like=${name}`).map(response => {
      return response.json();
    });
  }

  setShipsSubject(name: string) {
    this.shipsSubject.next(name);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || {};
  }
  
  private handleErrorObservable (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }

}