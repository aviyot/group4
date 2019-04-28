import { TestBed } from '@angular/core/testing';

import { IntushServicesService } from './intush-services.service';

describe('IntushServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IntushServicesService = TestBed.get(IntushServicesService);
    expect(service).toBeTruthy();
  });
});
