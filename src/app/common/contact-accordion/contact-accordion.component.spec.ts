import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactAccordionComponent } from './contact-accordion.component';

describe('ContactAccordionComponent', () => {
  let component: ContactAccordionComponent;
  let fixture: ComponentFixture<ContactAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactAccordionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
