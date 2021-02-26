import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDragListComponent } from './drop-drag-list.component';

describe('DropDragListComponent', () => {
  let component: DropDragListComponent;
  let fixture: ComponentFixture<DropDragListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropDragListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropDragListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
