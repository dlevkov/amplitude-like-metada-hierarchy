import { TestBed } from '@angular/core/testing';

import { DomListenerService } from './dom-listener.service';

describe('DomListenerService', () => {
  let service: DomListenerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DomListenerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
