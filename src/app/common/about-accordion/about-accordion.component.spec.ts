import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutAccordionComponent } from './about-accordion.component';

describe('AccordionGroupComponent', () => {
  let component: AboutAccordionComponent;
  let fixture: ComponentFixture<AboutAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutAccordionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
