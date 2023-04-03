import { TestBed } from '@angular/core/testing';

import { CucineListService } from './cucine-list.service';

describe('CucineListService', () => {
  let service: CucineListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CucineListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
