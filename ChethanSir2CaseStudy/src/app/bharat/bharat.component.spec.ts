import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BharatComponent } from './bharat.component';

describe('BharatComponent', () => {
  let component: BharatComponent;
  let fixture: ComponentFixture<BharatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BharatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BharatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
