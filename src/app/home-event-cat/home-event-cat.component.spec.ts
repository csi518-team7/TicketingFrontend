import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEventCatComponent } from './home-event-cat.component';

describe('HomeEventCatComponent', () => {
  let component: HomeEventCatComponent;
  let fixture: ComponentFixture<HomeEventCatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeEventCatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeEventCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
