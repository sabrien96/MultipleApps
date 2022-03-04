import { Injectable } from '@angular/core';
import { IProduct } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  localStorage: Storage;
  list: any;
  constructor() {
    this.localStorage = window.localStorage;
  }
  get(key: string): any {
    if (this.isLocalStorageSupported) {
      return JSON.parse(this.localStorage.getItem(key) + "");
    }
    return null;
  }
  set(key: string, value: any): boolean {
    if (this.isLocalStorageSupported) {
      this.localStorage.setItem(key, JSON.stringify(value));
      return true;
    }
    return false;
  }
  remove(key: string): boolean {
    if (this.isLocalStorageSupported) {
      this.localStorage.removeItem(key);
      return true;
    }
    return false;
  }
  get isLocalStorageSupported(): boolean {
    return !!this.localStorage;
  }

  addToWishList(product: IProduct) {
    let temp = this.get('favouriteList');
    if (temp != null) {
      this.list = temp;
      this.list.push(product);
      this.set('favouriteList', this.list)
    }
    else {
      this.list.push(product);
      this.set('favouriteList', this.list)
    }
  }
}
