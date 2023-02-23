/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { profesorService } from './profesor.service';

describe('Service: Profesor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [profesorService]
    });
  });

  it('should ...', inject([profesorService], (service: profesorService) => {
    expect(service).toBeTruthy();
  }));
});
