import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RicercaPagamentoComponent } from './ricerca-pagamento.component';

describe('RicercaPagamentoComponent', () => {
  let component: RicercaPagamentoComponent;
  let fixture: ComponentFixture<RicercaPagamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RicercaPagamentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RicercaPagamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
