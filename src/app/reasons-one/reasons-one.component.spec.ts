import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReasonsOneComponent } from './reasons-one.component';

describe('ReasonsOneComponent', () => {
  let component: ReasonsOneComponent;
  let fixture: ComponentFixture<ReasonsOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReasonsOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReasonsOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
