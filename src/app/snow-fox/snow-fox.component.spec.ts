import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnowFoxComponent } from './snow-fox.component';

describe('SnowFoxComponent', () => {
  let component: SnowFoxComponent;
  let fixture: ComponentFixture<SnowFoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnowFoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SnowFoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
