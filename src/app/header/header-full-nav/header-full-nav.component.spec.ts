import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderFullNavComponent } from './header-full-nav.component';

describe('HeaderFullNavComponent', () => {
  let component: HeaderFullNavComponent;
  let fixture: ComponentFixture<HeaderFullNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderFullNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderFullNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
