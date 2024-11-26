import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabellaRendicontazioneComponent } from './tabella-rendicontazione.component';

describe('TabellaRendicontazioneComponent', () => {
  let component: TabellaRendicontazioneComponent;
  let fixture: ComponentFixture<TabellaRendicontazioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabellaRendicontazioneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabellaRendicontazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
