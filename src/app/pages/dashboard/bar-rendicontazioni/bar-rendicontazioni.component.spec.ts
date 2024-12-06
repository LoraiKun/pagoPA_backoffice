import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarRendicontazioniComponent } from './bar-rendicontazioni.component';

describe('BarRendicontazioniComponent', () => {
  let component: BarRendicontazioniComponent;
  let fixture: ComponentFixture<BarRendicontazioniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarRendicontazioniComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarRendicontazioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
