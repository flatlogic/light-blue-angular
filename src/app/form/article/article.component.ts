import { Component } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: '[article]',
  templateUrl: './article.template.html',
  styleUrls: [ './article.style.scss' ]
})
export class Article {
  ngOnInit(): void {
    jQuery('.selectpicker').selectpicker();
  }
}
