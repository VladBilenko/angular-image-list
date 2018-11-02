import {EventEmitter, Injectable} from '@angular/core';
import * as mockPhotos from '../mocks/photos.mock.json';
import {SortTypes} from '../enums/sort-types.enum';
import {CompareService} from '../../core/services/compare.service';

@Injectable({
  providedIn: 'root'
})
export class PhotosItemsService {
  private mockHttp = new EventEmitter();

  constructor(private compareService: CompareService) {
  }

  public fetchMockPhotos(sortType: SortTypes) {
    this.mockHttpRequest(sortType);

    return this.mockHttp;
  }

  private mockHttpRequest(sortType: SortTypes) {
    setTimeout(() => (this.mockHttp.emit(this.compareService.sortByParam(mockPhotos.photos, sortType))), 1200);
  }

}
