import {EventEmitter, Injectable} from '@angular/core';
import * as mockPhotos from '../mocks/photos.mock.json';
import {SortTypes} from '../enums/sort-types.enum';

@Injectable({
  providedIn: 'root'
})
export class PhotosItemsService {
  private mockHttp = new EventEmitter();

  public fetchMockPhotos(sortType: SortTypes) {
    this.mockHttpRequest(sortType);

    return this.mockHttp;
  }

  private mockHttpRequest(sortType: SortTypes) {
    setTimeout(() => (this.mockHttp.emit(this.sortByParam(mockPhotos.photos, sortType))), 1200);
  }

  private sortByParam(items: any, sortType: SortTypes) {
    return items.sort(
      (firstItem: any, secondItem: any) => {
      // console.log(firstItem[sortType], secondItem[sortType])
      return firstItem[sortType] - secondItem[sortType];
    }
    );
  }

}
