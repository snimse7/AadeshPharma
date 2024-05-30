import { TestBed } from '@angular/core/testing';

import { AadeshPharmaService } from './aadesh-pharma.service';

describe('AadeshPharmaService', () => {
  let service: AadeshPharmaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AadeshPharmaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
