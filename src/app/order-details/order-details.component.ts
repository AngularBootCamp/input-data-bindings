import { Component, Input } from '@angular/core';

import { Order } from '../api-types';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html'
})
export class OrderDetailsComponent {
  @Input() details: Order | undefined;
}
