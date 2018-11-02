import {Component, Input} from '@angular/core';
import {PhotoItem} from '../../models/photos-item.model';


@Component({
  selector: 'app-photo-item',
  templateUrl: './photo-item.component.html',
  styleUrls: ['./photo-item.component.scss']
})
export class PhotoItemComponent {

 @Input() public imageData: PhotoItem;
}
