import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitFreedomDesktopComponent } from './fit-freedom-desktop.component';

describe('FitFreedomDesktopComponent', () => {
  let component: FitFreedomDesktopComponent;
  let fixture: ComponentFixture<FitFreedomDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FitFreedomDesktopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FitFreedomDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
