import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabellaRichiesteComponent } from './tabella-richieste.component';

describe('TabellaRichiesteComponent', () => {
  let component: TabellaRichiesteComponent;
  let fixture: ComponentFixture<TabellaRichiesteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabellaRichiesteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabellaRichiesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
