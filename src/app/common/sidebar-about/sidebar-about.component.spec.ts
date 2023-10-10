import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarAboutComponent } from './sidebar-about.component';

describe('SidebarAboutComponent', () => {
  let component: SidebarAboutComponent;
  let fixture: ComponentFixture<SidebarAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
