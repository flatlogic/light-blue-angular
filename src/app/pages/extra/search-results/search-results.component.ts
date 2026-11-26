import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  standalone: false,
  selector: '[extra-search-results]',
  templateUrl: './search-results.template.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./search-results.style.scss']
})
export class SearchResultsComponent {
}
