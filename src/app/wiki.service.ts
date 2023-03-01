import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WikipediaResponse } from 'src/app/wikipedia.interfaces';

@Injectable({
  providedIn: 'root'
})
export class WikiService {

  constructor(private http: HttpClient) { }

  public searchTerm(term: string) {
    return this.http.get<WikipediaResponse>('https://en.wikipedia.org/w/api.php', {
      params: {
        action: 'query',
        format: 'json',
        list: 'search',
        utf8: '1',
        srsearch: term,
        origin: '*'
      }
    });
  }
}
