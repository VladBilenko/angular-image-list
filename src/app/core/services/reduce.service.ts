import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReduceService {

  public getTotalOfArray(arr): number {
    return Math.round(arr.reduce((a, b) => (a + b)) * 10 / 10);
  }
}
