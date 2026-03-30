import { TestBed } from '@angular/core/testing';

import { Releve } from './releve';

describe('Releve', () => {
  let service: Releve;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Releve);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
