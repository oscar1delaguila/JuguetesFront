import { TestBed } from '@angular/core/testing';

import { ConnectbackService } from './connectback.service';

describe('ConnectbackService', () => {
  let service: ConnectbackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnectbackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
