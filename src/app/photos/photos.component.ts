import {Component, OnInit} from '@angular/core';
import {PhotosItemsService} from './services/photos-items.service';
import {SortTypes} from './enums/sort-types.enum';
import {PhotoItem} from './models/photos-item.model';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  constructor(private photosItemsService: PhotosItemsService) { }

  public ngOnInit() {
    this.getPhotos();
  }

  private getPhotos() {
    this.photosItemsService.fetchMockPhotos(SortTypes.ByName).subscribe(
      (photos: PhotoItem[]) => console.log(photos),
      err => console.log(err)
    );
  }

}
