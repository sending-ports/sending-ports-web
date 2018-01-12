import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipRegisterComponent } from './ship-register.component';

describe('ShipRegisterComponent', () => {
  let component: ShipRegisterComponent;
  let fixture: ComponentFixture<ShipRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
