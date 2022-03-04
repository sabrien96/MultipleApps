import { Component, OnInit } from '@angular/core';
import { User } from '../../../../../../../shared/models/user';
import { AuthService } from '../../../../../../../shared/services/auth.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  userData:User=new User('','','','')
  constructor(private authServe:AuthService) { 
    this.getUserInfo();
  }

  ngOnInit(): void {
  }
  getUserInfo(){
   let userId=localStorage.getItem('userId');
   if(userId!=null){
     this.authServe.getUserById(userId).subscribe((response)=>{
       this.userData=response;
     })
   }
  }

}
