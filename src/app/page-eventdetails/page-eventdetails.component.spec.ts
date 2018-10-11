import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEventdetailsComponent } from './page-eventdetails.component';

describe('PageEventdetailsComponent', () => {
  let component: PageEventdetailsComponent;
  let fixture: ComponentFixture<PageEventdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageEventdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageEventdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
