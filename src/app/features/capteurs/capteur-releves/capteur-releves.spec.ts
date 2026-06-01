import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapteurRelevesComponent } from './capteur-releves';

describe('CapteurReleves', () => {
  let component: CapteurRelevesComponent;
  let fixture: ComponentFixture<CapteurRelevesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CapteurRelevesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CapteurRelevesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
