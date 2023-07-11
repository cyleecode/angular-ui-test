import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostTargetIdComponent } from './post-target-id.component';

describe('PostTargetIdComponent', () => {
  let component: PostTargetIdComponent;
  let fixture: ComponentFixture<PostTargetIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostTargetIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostTargetIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
