import { TestBed } from '@angular/core/testing';

import { LithoService } from './service.service';

describe('LithoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LithoService = TestBed.get(LithoService);
    expect(service).toBeTruthy();
  });
});
