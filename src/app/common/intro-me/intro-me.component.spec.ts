import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroMeComponent } from './intro-me.component';

describe('IntroMeComponent', () => {
  let component: IntroMeComponent;
  let fixture: ComponentFixture<IntroMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroMeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
