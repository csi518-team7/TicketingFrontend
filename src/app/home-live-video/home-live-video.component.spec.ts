import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLiveVideoComponent } from './home-live-video.component';

describe('HomeLiveVideoComponent', () => {
  let component: HomeLiveVideoComponent;
  let fixture: ComponentFixture<HomeLiveVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeLiveVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLiveVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
