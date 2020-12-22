import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReasonFourComponent } from './reason-four.component';

describe('ReasonFourComponent', () => {
  let component: ReasonFourComponent;
  let fixture: ComponentFixture<ReasonFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReasonFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReasonFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
