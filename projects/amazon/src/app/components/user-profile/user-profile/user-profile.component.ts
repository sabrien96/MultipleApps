import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  toggleSidebar = false;
  constructor() {

  }

  ngOnInit(): void {
    // $('#openbtn').on('click', () => {
    //   $("#mySidenav").width("200px");
    //   $("#content").css('margin-left', '200px');
    //   console.log('open');
    //   document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    // });

    // $('.closebtn').on('click', () => {
    //   $("#mySidenav").width("0");
    //   $("#content").css('margin-left', '0');
    //   console.log('close');
    //   document.body.style.backgroundColor = "white";
    // });
  }
  ngOnChanges(changes: any) {
  }

}
