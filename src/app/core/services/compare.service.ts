import {Injectable} from '@angular/core';
import {SortTypes} from '../../photos/enums/sort-types.enum';

@Injectable({
  providedIn: 'root'
})
export class CompareService {

  public sortByParam(items: any, sortType: SortTypes) {
    if (sortType === SortTypes.ByName) {
      return items.sort(
        (firstItem: any, secondItem: any) => (this.compareString(firstItem[sortType], secondItem[sortType])));
    } else {
      return items.sort(
        (firstItem: any, secondItem: any) => (this.compareNumbers(firstItem[sortType], secondItem[sortType])));
    }
  }

  private compareNumbers(firstItem: number, secondItem: number): number {
    return secondItem - firstItem;
  }

  private compareString(firstItem: string, secondItem: string): number {
    if (firstItem > secondItem) {
      return 1;
    } else if (firstItem < secondItem) {
      return -1;
    } else {
      return 0;
    }
  }
}
