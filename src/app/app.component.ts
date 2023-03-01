import { Component } from '@angular/core';
import { WikiService } from 'src/app/wiki.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private wikiService: WikiService) { }

  public onSearch(term: string) {
    this.wikiService.searchTerm(term).subscribe((resp) => console.log(resp.query.search));
  }
}
