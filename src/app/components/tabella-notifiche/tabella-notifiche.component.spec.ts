import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabellaNotificheComponent } from './tabella-notifiche.component';

describe('TabellaNotificheComponent', () => {
  let component: TabellaNotificheComponent;
  let fixture: ComponentFixture<TabellaNotificheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabellaNotificheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabellaNotificheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
