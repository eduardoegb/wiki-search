import { Component, Input } from '@angular/core';
import { WikipediaData } from 'src/app/wikipedia.interfaces';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent {
  @Input() public pages: WikipediaData[];

  constructor() {
    this.pages = [];
  }
}
