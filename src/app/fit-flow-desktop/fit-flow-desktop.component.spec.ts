import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitFlowDesktopComponent } from './fit-flow-desktop.component';

describe('FitFlowDesktopComponent', () => {
  let component: FitFlowDesktopComponent;
  let fixture: ComponentFixture<FitFlowDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FitFlowDesktopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FitFlowDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
