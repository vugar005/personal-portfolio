import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTechComponent } from './home-tech.component';

describe('HomeTechComponent', () => {
  let component: HomeTechComponent;
  let fixture: ComponentFixture<HomeTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeTechComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
