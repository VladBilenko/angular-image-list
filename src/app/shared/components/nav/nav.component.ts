import { Component } from '@angular/core';
import {faFileInvoice, faImages, faShareAlt, faUser} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  public navListConfig = [
    {
      link: '/photos',
      text: 'Photos',
      icon: faImages
    },
    {
      link: '/files',
      text: 'Files',
      icon: faFileInvoice
    },
    {
      link: '/sharing',
      text: 'Sharing',
      icon: faShareAlt
    },
    {
      link: '/cabinet',
      text: 'Cabinet',
      icon: faUser
    }
  ];

}
