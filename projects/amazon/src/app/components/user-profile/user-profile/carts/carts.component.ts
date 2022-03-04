import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../../../../../../shared/models/product';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.scss']
})
export class CartsComponent implements OnInit {

  cartCounter: number = 0;
  qty: number = 1;
  cartsList:IProduct[]=[];
  constructor() {
    // this.storeServe.getCartCountListner().subscribe((response) => {
    //   this.cartCounter = response;
    //   console.log(this.cartCounter);

    // })
  }

  ngOnInit(): void {
  }
  addToCart() {
    this.cartCounter += 1;
    // this.storeServe.setCartCountListener(this.cartCounter)
    console.log("added to card", this.cartCounter);

  }
  counterForQty(operation: string) {
    switch (operation) {
      case '+':
        this.qty = this.qty + 1;
        break;
      case '-':
        this.qty = this.qty - 1;
        break;
    }
    console.log(`op: ${operation} , ${this.qty}`);

  }
}
