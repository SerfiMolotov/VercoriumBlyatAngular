import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { ReleveListeComponent } from './releve-liste';

describe('ReleveListeComponent', () => {
  let component: ReleveListeComponent;
  let fixture: ComponentFixture<ReleveListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReleveListeComponent],
      providers: [provideHttpClient()]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ReleveListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
