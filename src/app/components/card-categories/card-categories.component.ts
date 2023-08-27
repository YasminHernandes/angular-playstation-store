import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-categories',
  templateUrl: './card-categories.component.html',
  styleUrls: ['./card-categories.component.scss']
})
export class CardCategoriesComponent implements OnInit {
  @Input() image: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
