import { TestBed } from '@angular/core/testing';

import { ServerclientService } from './serverclient.service';

describe('ServerclientService', () => {
  let service: ServerclientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServerclientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
