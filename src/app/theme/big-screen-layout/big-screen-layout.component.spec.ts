import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigScreenLayoutComponent } from './big-screen-layout.component';

describe('BigScreenLayoutComponent', () => {
  let component: BigScreenLayoutComponent;
  let fixture: ComponentFixture<BigScreenLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigScreenLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BigScreenLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
