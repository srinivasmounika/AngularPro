import { TestBed } from '@angular/core/testing';

import { CoolService } from './cool.service';

describe('CoolService', () => {
  let service: CoolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
