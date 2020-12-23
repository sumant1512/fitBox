import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitTouchDesktopComponent } from './fit-touch-desktop.component';

describe('FitTouchDesktopComponent', () => {
  let component: FitTouchDesktopComponent;
  let fixture: ComponentFixture<FitTouchDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FitTouchDesktopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FitTouchDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
