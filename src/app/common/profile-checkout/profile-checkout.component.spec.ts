import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCheckoutComponent } from './profile-checkout.component';

describe('ProfileCheckoutComponent', () => {
  let component: ProfileCheckoutComponent;
  let fixture: ComponentFixture<ProfileCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileCheckoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
