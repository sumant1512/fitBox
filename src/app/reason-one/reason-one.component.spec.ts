import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReasonOneComponent } from './reason-one.component';

describe('ReasonOneComponent', () => {
  let component: ReasonOneComponent;
  let fixture: ComponentFixture<ReasonOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReasonOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReasonOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
