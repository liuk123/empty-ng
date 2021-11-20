import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectBlogComponent } from './collect-blog.component';

describe('CollectBlogComponent', () => {
  let component: CollectBlogComponent;
  let fixture: ComponentFixture<CollectBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
