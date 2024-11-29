import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettagliComponent } from './dettagli.component';

describe('DettagliComponent', () => {
  let component: DettagliComponent;
  let fixture: ComponentFixture<DettagliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DettagliComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DettagliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
