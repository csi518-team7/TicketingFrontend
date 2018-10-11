import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTodayEventsComponent } from './page-today-events.component';

describe('PageTodayEventsComponent', () => {
  let component: PageTodayEventsComponent;
  let fixture: ComponentFixture<PageTodayEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageTodayEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTodayEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
