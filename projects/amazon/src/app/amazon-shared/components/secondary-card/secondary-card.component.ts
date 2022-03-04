import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-secondary-card',
  templateUrl: './secondary-card.component.html',
  styleUrls: ['./secondary-card.component.scss']
})
export class SecondaryCardComponent implements OnInit {
  @Input()product:any;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  navigateTo(){
    this.router.navigate(['/products/product-details',this.product._id]);
  }
}
