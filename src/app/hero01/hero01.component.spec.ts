import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hero01Component } from './hero01.component';

describe('Hero01Component', () => {
  let component: Hero01Component;
  let fixture: ComponentFixture<Hero01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hero01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hero01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
