import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovertCurrencyBoardComponent } from './covert-currency-board.component';

describe('CovertCurrencyBoardComponent', () => {
  let component: CovertCurrencyBoardComponent;
  let fixture: ComponentFixture<CovertCurrencyBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovertCurrencyBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CovertCurrencyBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
