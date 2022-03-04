import { CategoryService } from './../../../../../../shared/services/category.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../../../shared/services/auth.service';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {

  @Input() isVisible = false;
  cartCounter:number=0;
  username:any;
  showSearch = false;
  categeories: any;
  subCategeories = [
    'menWear',
    'womenWear',
    'kidWear',
    'mobiles',
    'labtops',
    'tv',
    'kitchen',
    'homeDecor',
    'furniture',
    'makeup',
    'skinCare',
    'hairCare',
  ];
  // SearchForm = this.formBuilder.group({
  //   search: ['', Validators.required],
  // });
  constructor(
    private router: Router,
    private categoryServe: CategoryService,
    private authServe:AuthService
    ) {
      this.authServe.getLoginistner().subscribe((response)=>{
        this.username=response;
        console.log('username',response); 
      })
     }

  go() {
    this.router.navigate(['/']);
  }
  ngOnInit(): void {
    this.getCategories();
    // this.getCartCount();
    
  }
  
  menuLisItems = [
    {
      id: 1,
      label: 'My Orders',
      routerLink: '/user-properties/orders',
    },
    {
      id: 2,
      label: 'My Addresses',
      routerLink: '/user-properties/shipping-address',
    },
    {
      id: 3,
      label: 'Wish Lists',
      routerLink: '/user-properties/wish-lists',
    },
    {
      id: 4,
      label: 'Account Settings',
      routerLink: '/Settings',
    },
    {
      id: 5,
      label: 'Account Summary',
      routerLink: '/Summary',
    },
  ];

  ngOnChanges(changes: any) {
    this.isVisible = changes.isVisible.currentValue;
     }
  

 
  navigateToForm(index: any) {
    switch (index) {
      case 1:
        this.router.navigate(['/auth/login']);
        break;
        case 2:
        this.router.navigate(['/auth/signup']);
        break;
    }
  }
  
  navigateToUser(link:string){
    console.log('link: ',link); 
    this.router.navigate([`/user/${link}`])
  }
  showHideSearch() {
    this.showSearch = !this.showSearch;
  }
  
  getCategories() {
    this.categoryServe.getAllCategory().subscribe(
      (data) => {
        this.categeories = data;
        // console.log('all my categories', this.categeories);
      },
      (err) => {
        console.log('from header: ', err);
      }
    );
  }
  //get subCategories

  search(search: string) {
    console.log(search);
    let filterCategory = this.categeories.filter((item: any, index: any) => {
      return item.name.toLowerCase().match(search.toString().toLowerCase());
    });
    if (filterCategory[0] != null) {
      let cateName =
        filterCategory[0]['name'].charAt(0).toUpperCase() +
        filterCategory[0]['name'].slice(1);
      console.log(' search category for ' + filterCategory[0]['cateid']);
      this.router.navigate([`/${cateName}/${filterCategory[0]['cateid']}`]);
    } else {
      var filterSub = this.subCategeories.filter((item: any, index: any) => {
        return item
          .toLocaleLowerCase()
          .match(search.toString().toLocaleLowerCase());
      });
      if (filterSub[0] != null) {
        console.log('subcate search for ' + filterSub[0]);
        this.router.navigate([`/filter/${filterSub[0]}`]);
      } else {
        console.log('not found');
        this.router.navigate([`/not-found`]);
      }
    }
  }
  // filteraion for search
  onEnterSearch(form: any) {
    //this.search();
    if (form.valid) {
      this.search(form.value.search);
    }
  }
  searchPress(form: any) {
    if (form.valid) {
      this.search(form.value.search);
    }
  }
  sumbitSearch(){
  }
  addOverlay(){
    console.log("fire event");
  //  this.storeServ.setOverlayListener(true);   
  }
  // getCartCount(){
  //   this.storeServ.getCartCountListner().subscribe((response)=>{
  //     this.cartCounter=response;
  //   })
  // }
}
