import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDevEnvironmentComponent } from './home-dev-environment.component';

describe('HomeDevEnvironmentComponent', () => {
  let component: HomeDevEnvironmentComponent;
  let fixture: ComponentFixture<HomeDevEnvironmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeDevEnvironmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDevEnvironmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
