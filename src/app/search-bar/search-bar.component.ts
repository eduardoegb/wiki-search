import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  @Output() public search: EventEmitter<string>;
  public term: string;

  constructor() {
    this.term = '';
    this.search = new EventEmitter();
  }

  public onInput(event: Event) {
    this.term = (event.target as HTMLInputElement).value;
  }

  public onSubmit(event: SubmitEvent) {
    event.preventDefault();
    this.search.emit(this.term);
  }
}
