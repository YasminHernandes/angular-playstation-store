import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
})
export class CardProductComponent implements OnInit {
  @Input() image: string = ''
  @Input() type_product: string = ''
  @Input() card_title: string = ''
  @Input() discount_value: string = ''
  @Input() price: string = ''
  @Input() selling_price: string = ''
  
  constructor() { }

  ngOnInit(): void {
  }

}
