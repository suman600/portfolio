import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeSnippedComponent } from './code-snipped.component';

describe('CodeSnippedComponent', () => {
  let component: CodeSnippedComponent;
  let fixture: ComponentFixture<CodeSnippedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeSnippedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeSnippedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
