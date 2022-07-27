import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouelDailyImageComponent } from './carouel-daily-image.component';

describe('CarouelDailyImageComponent', () => {
  let component: CarouelDailyImageComponent;
  let fixture: ComponentFixture<CarouelDailyImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouelDailyImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouelDailyImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
