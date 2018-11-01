import {EventEmitter, Injectable} from '@angular/core';
import mockPhotos from '../mocks/photos.mock.json';
import {SortTypes} from '../enums/sort-types.enum';
import {PhotoItem} from '../models/photos-item.model';

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
    setTimeout(() => (this.mockHttp.emit(this.sortBy(mockPhotos.photos, sortType))), 1200);
  }

  private sortBy(items: PhotoItem[], sortType: SortTypes) {
    switch (sortType) {
      case SortTypes.ByName :
        return items;
      case SortTypes.ByDate :
        return items;
      case SortTypes.BySize :
        return items;
      default :
        return items;
    }
  }
}
