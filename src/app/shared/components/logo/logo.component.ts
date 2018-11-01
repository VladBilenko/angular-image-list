import { Component } from '@angular/core';
import {faBoxOpen} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent {
  public faBoxOpen = faBoxOpen;
}
