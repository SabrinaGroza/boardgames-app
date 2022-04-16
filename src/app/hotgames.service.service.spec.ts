import { TestBed } from '@angular/core/testing';

import { Hotgames.ServiceService } from './hotgames.service.service';

describe('Hotgames.ServiceService', () => {
  let service: Hotgames.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Hotgames.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
