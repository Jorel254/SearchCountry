import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeecountryComponent } from './seecountry.component';

describe('SeecountryComponent', () => {
  let component: SeecountryComponent;
  let fixture: ComponentFixture<SeecountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeecountryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeecountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
