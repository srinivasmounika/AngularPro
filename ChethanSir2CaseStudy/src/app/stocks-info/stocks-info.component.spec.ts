import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StocksInfoComponent } from './stocks-info.component';

describe('StocksInfoComponent', () => {
  let component: StocksInfoComponent;
  let fixture: ComponentFixture<StocksInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StocksInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StocksInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
