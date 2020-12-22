import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReasonTwoComponent } from './reason-two.component';

describe('ReasonTwoComponent', () => {
  let component: ReasonTwoComponent;
  let fixture: ComponentFixture<ReasonTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReasonTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReasonTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
