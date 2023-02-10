import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AMAComponent } from './ama.component';

describe('AMAComponent', () => {
  let component: AMAComponent;
  let fixture: ComponentFixture<AMAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AMAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AMAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
