import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesRendicontazioniComponent } from './files-rendicontazioni.component';

describe('FilesRendicontazioniComponent', () => {
  let component: FilesRendicontazioniComponent;
  let fixture: ComponentFixture<FilesRendicontazioniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilesRendicontazioniComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilesRendicontazioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
