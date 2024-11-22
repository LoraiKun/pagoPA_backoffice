import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RichiestePagamentoComponent } from './richieste-pagamento.component';

describe('RichiestePagamentoComponent', () => {
  let component: RichiestePagamentoComponent;
  let fixture: ComponentFixture<RichiestePagamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RichiestePagamentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RichiestePagamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
