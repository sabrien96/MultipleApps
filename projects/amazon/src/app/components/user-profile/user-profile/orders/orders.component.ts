import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../../../../../shared/services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  orderList:any=[];
  userId: any;
  constructor(private orderServ: OrderService) {
    this.userId = localStorage.getItem('userId');
  }

  ngOnInit(): void {
  }
  getUserOrders() {
    this.orderServ.getOrdersByUserID(this.userId).subscribe((response) => {
      this.orderList = response;
    });
  }

}
