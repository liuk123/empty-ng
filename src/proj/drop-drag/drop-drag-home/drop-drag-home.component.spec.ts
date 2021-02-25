import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDragHomeComponent } from './drop-drag-home.component';

describe('DropDragHomeComponent', () => {
  let component: DropDragHomeComponent;
  let fixture: ComponentFixture<DropDragHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropDragHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropDragHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
