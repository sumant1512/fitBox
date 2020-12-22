import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReasonsFourComponent } from './reasons-four.component';

describe('ReasonsFourComponent', () => {
  let component: ReasonsFourComponent;
  let fixture: ComponentFixture<ReasonsFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReasonsFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReasonsFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
