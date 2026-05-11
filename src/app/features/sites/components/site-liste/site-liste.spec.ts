import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteListeComponent } from './site-liste';

describe('SiteListe', () => {
  let component: SiteListeComponent;
  let fixture: ComponentFixture<SiteListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiteListeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SiteListeComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
