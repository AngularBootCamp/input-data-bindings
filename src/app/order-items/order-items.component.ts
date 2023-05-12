import { Component, Input } from '@angular/core';

import { Item } from '..https://api.angularbootcamp.com-types';

@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html'
})
export class OrderItemsComponent {
  @Input() items: Item[] = [];
}
