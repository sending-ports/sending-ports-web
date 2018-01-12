import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShipService } from '../../service/ship.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ship-register',
  templateUrl: './ship-register.component.html',
  styleUrls: ['./ship-register.component.css']
})
export class ShipRegisterComponent implements OnInit {

  @ViewChild('templateModal') template: ElementRef;
  private shipForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private shipService: ShipService,
    private modalService: NgbModal
  ) { 

    this.shipForm = formBuilder.group({
      'name': [ null, [ Validators.required,
        Validators.minLength(2),
        Validators.maxLength(300)
      ]],
      'country': [ null, [ Validators.required,
        Validators.minLength(3),
        Validators.maxLength(150)
      ]]
    });

  }

  ngOnInit() {}

  create(formValue) {
    this.shipService.createShip(formValue)
      .subscribe(data => {
        this.open(this.template);
      });
  }

  private open(templateModal) {
    this.modalService.open(templateModal).result
      .then(result => {
        this.shipForm.reset();
    });
  }


}
