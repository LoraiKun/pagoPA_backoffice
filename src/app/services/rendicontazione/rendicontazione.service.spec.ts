import { TestBed } from '@angular/core/testing';

import { RendicontazioneService } from './rendicontazione.service';

describe('RendicontazioneService', () => {
  let service: RendicontazioneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RendicontazioneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
