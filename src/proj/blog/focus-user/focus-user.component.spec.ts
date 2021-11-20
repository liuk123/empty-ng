import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FocusUserComponent } from './focus-user.component';

describe('FocusUserComponent', () => {
  let component: FocusUserComponent;
  let fixture: ComponentFixture<FocusUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FocusUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FocusUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
