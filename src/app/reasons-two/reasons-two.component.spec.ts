import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReasonsTwoComponent } from './reasons-two.component';

describe('ReasonsTwoComponent', () => {
  let component: ReasonsTwoComponent;
  let fixture: ComponentFixture<ReasonsTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReasonsTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReasonsTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
