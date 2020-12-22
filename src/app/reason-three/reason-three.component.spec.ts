import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReasonThreeComponent } from './reason-three.component';

describe('ReasonThreeComponent', () => {
  let component: ReasonThreeComponent;
  let fixture: ComponentFixture<ReasonThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReasonThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReasonThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
