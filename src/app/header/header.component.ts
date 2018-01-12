import { Component, OnInit } from '@angular/core';

import { ShipService } from './../service/ship.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public formulario: FormGroup = new FormGroup({
    'search': new FormControl(null, [
      Validators.required,
      Validators.min(3),
      Validators.max(10)
    ])
  });

  constructor(private shipService: ShipService) { }

  ngOnInit() {}

  public search() {
    console.log(this.formulario);
    //this.shipService.setShipsSubject(name);
  }

}
