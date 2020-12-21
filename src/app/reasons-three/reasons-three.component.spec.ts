import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReasonsThreeComponent } from './reasons-three.component';

describe('ReasonsThreeComponent', () => {
  let component: ReasonsThreeComponent;
  let fixture: ComponentFixture<ReasonsThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReasonsThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReasonsThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
