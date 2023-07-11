import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCommentsComponent } from './search-comments.component';

describe('SearchCommentsComponent', () => {
  let component: SearchCommentsComponent;
  let fixture: ComponentFixture<SearchCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchCommentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
