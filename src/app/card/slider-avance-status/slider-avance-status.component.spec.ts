import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderAvanceStatusComponent } from './slider-avance-status.component';

describe('SliderAvanceStatusComponent', () => {
  let component: SliderAvanceStatusComponent;
  let fixture: ComponentFixture<SliderAvanceStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderAvanceStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderAvanceStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
