import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindMeAlsoComponent } from './find-me-also.component';

describe('FindMeAlsoComponent', () => {
  let component: FindMeAlsoComponent;
  let fixture: ComponentFixture<FindMeAlsoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindMeAlsoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindMeAlsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
