import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitSmileDesktopComponent } from './fit-smile-desktop.component';

describe('FitSmileDesktopComponent', () => {
  let component: FitSmileDesktopComponent;
  let fixture: ComponentFixture<FitSmileDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FitSmileDesktopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FitSmileDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
