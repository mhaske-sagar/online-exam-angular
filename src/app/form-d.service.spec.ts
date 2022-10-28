import { TestBed } from '@angular/core/testing';

import { FormDService } from './form-d.service';

describe('FormDService', () => {
  let service: FormDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
