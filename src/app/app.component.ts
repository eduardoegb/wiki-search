import { Component } from '@angular/core';
import { WikiService } from 'src/app/wiki.service';
import { WikipediaData } from 'src/app/wikipedia.interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public search: WikipediaData[];

  constructor(private wikiService: WikiService) {
    this.search = [];
  }

  public onSearch(term: string) {
    this.wikiService.searchTerm(term).subscribe((resp) => {
      this.search = resp.query.search;
    });
  }
}
