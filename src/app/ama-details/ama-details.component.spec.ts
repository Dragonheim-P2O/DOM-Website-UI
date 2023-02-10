import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmaDetailsComponent } from './ama-details.component';

describe('AmaDetailsComponent', () => {
  let component: AmaDetailsComponent;
  let fixture: ComponentFixture<AmaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmaDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
