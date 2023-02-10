import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmaCardComponent } from './ama-card.component';

describe('AmaCardComponent', () => {
  let component: AmaCardComponent;
  let fixture: ComponentFixture<AmaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmaCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
