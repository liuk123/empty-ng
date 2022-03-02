import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicHomeComponent } from './dynamic-home.component';

describe('DynamicHomeComponent', () => {
  let component: DynamicHomeComponent;
  let fixture: ComponentFixture<DynamicHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
