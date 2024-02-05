import { NgFor } from '@angular/common';
import { Component, Input, numberAttribute } from '@angular/core';

import { Order } from '../api-types';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  standalone: true,
  imports: [NgFor]
})
export class OrderListComponent {
  // defaults to property name = variable name.
  // can override, @Input('name') or @Input({alias: 'name'})
  @Input({ required: true }) orders!: Order[];
  // This could be derived from orders, but we want to show the
  // transform
  @Input({ required: true, transform: numberAttribute })
  count!: number;
}
