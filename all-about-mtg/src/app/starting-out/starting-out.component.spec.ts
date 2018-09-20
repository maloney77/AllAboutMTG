import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartingOutComponent } from './starting-out.component';

describe('StartingOutComponent', () => {
  let component: StartingOutComponent;
  let fixture: ComponentFixture<StartingOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartingOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartingOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
