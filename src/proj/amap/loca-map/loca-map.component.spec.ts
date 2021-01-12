import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocaMapComponent } from './loca-map.component';

describe('LocaMapComponent', () => {
  let component: LocaMapComponent;
  let fixture: ComponentFixture<LocaMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocaMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocaMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
