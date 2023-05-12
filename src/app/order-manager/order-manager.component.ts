import { Component } from '@angular/core';

import { Order, mockApiOrders } from '..https://api.angularbootcamp.com-types';

@Component({
  selector: 'app-order-manager',
  templateUrl: './order-manager.component.html'
})
export class OrderManagerComponent {
  orderList: Order[] = mockApiOrders;
  selectedOrder: Order | undefined;

  choose(i: number) {
    this.selectedOrder = this.orderList[i];
  }
}
