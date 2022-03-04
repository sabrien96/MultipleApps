import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../../../../../../shared/services/local-storage.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  wishList:any=[];
  constructor(private localStorageServ:LocalStorageService) { 
    this.getWishList();
   
  }

  ngOnInit(): void {
  }

  getWishList(){
  this.wishList= this.localStorageServ.get('favouriteList');
  }
  removeItem(productId:any){
    let newList;
    newList=this.wishList.filter((ele:any)=>{
      if(ele._id!=productId){
        return ele;
      }
    });
    this.wishList=newList;
    localStorage.setItem('favouriteList',this.wishList+'');
  }
}
