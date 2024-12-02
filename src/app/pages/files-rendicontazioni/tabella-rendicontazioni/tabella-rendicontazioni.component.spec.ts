import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabellaRendicontazioniComponent } from './tabella-rendicontazioni.component';

describe('TabellaRendicontazioniComponent', () => {
  let component: TabellaRendicontazioniComponent;
  let fixture: ComponentFixture<TabellaRendicontazioniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabellaRendicontazioniComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabellaRendicontazioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
