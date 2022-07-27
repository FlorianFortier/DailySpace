import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageOfTheDayComponent } from './image-of-the-day.component';

describe('ImageOfTheDayComponent', () => {
  let component: ImageOfTheDayComponent;
  let fixture: ComponentFixture<ImageOfTheDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageOfTheDayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageOfTheDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
