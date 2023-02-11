import { Injectable } from '@angular/core';
import { LazyModule } from './lazy.module';

let count = 1;
@Injectable({
  providedIn: LazyModule,
  // providedIn: 'any',
  // providedIn: 'root',
})
export class LazyService {
  prefix = '';
  constructor() {
    console.log('LazyService', count++);
  }
}
