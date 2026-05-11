import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleveCreateComponent } from './releve-create';

describe('ReleveCreate', () => {
  let component: ReleveCreateComponent;
  let fixture: ComponentFixture<ReleveCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReleveCreateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReleveCreateComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
