import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifichePagamentoComponent } from './notifiche-pagamento.component';

describe('NotifichePagamentoComponent', () => {
  let component: NotifichePagamentoComponent;
  let fixture: ComponentFixture<NotifichePagamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotifichePagamentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotifichePagamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
