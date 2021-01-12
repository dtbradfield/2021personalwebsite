import { TestBed } from '@angular/core/testing';

import { RandomuserServiceService } from './randomuser-service.service';

describe('RandomuserServiceService', () => {
  let service: RandomuserServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomuserServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
