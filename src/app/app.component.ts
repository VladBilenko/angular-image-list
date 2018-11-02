import {Component, HostListener, OnInit} from '@angular/core';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';
import {ReduceService} from './core/services/reduce.service';
import {PhotosItemsService} from './photos/services/photos-items.service';
import {SortTypes} from './photos/enums/sort-types.enum';
import {PhotoItem} from './photos/models/photos-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public readonly faCoffee = faCoffee;
  public readonly title = 'angular-image-list';
  public photosSize: number;
  public photosSizePercent: number;
  public readonly maxSize = 100;
  private subscriber;
  public innerWidth: any;

  constructor(
    private photosItemsService: PhotosItemsService,
    private reducerService: ReduceService) {
  }

  public ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.getPhotosItems();
  }

  private getPhotosItems() {
    this.subscriber = this.photosItemsService.fetchMockPhotos(SortTypes.ByName).subscribe(
      (res: PhotoItem[]) => this.setPhotosSize(res),
      err => console.log(err)
    );
  }

  private setPhotosSize(arr) {
    const photosSizeArr = arr.map((item: PhotoItem) => (item.fileSize));
    this.photosSize = this.reducerService.getTotalOfArray(photosSizeArr);
    this.photosSizePercent = this.photosSize / this.maxSize * 100;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
  }

}
