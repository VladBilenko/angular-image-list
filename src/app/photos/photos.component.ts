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
  private requestSubscription;
  public sortTypes = {
    name: SortTypes.ByName,
    size: SortTypes.BySize,
    date: SortTypes.ByDate
  };
  public selectedSorting = this.sortTypes.name;
  public photos: PhotoItem[];

  constructor(private photosItemsService: PhotosItemsService) {
  }

  public ngOnInit() {
    this.getPhotos();
  }

  private getPhotos() {
     this.requestSubscription = this.photosItemsService.fetchMockPhotos(this.selectedSorting).subscribe(
      (photos: PhotoItem[]) => {
        this.photos = photos;
        this.requestSubscription.unsubscribe();
      },
      err => console.log(err)
    );
  }

  public changeSort(sortType: any) {
    this.selectedSorting = sortType.value;
    this.getPhotos();
  }

}
