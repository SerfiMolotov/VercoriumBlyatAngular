import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteCapteursComponent } from './site-capteurs';

describe('SiteCapteurs', () => {
  let component: SiteCapteursComponent;
  let fixture: ComponentFixture<SiteCapteursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiteCapteursComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SiteCapteursComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
