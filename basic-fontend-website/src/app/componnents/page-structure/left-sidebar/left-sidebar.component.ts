import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserRp } from 'src/app/api/model/user.model';
import { UserService } from 'src/app/api/service/user.service';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.css']
})
export class LeftSidebarComponent implements OnInit {
  public profile: UserRp = new UserRp();
  public isLogin: boolean = false;
  signInActive:boolean=false;
   signUpActive:boolean=false;
  constructor(private userService: UserService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService) { userService.$userCurrent.subscribe(user => {
      this.profile = user
      this.isLogin = user.username != undefined && user.username != null && user.username != "" ;
    });  
    userService.getMyProfile().subscribe(rp => userService.setUserCurrent(rp.content));}

  ngOnInit(): void {
  }
  logoutClick(): void {
    this.userService.logout();
    // this.signUpActive=false;
    // this.signInActive=false;
  }
  signinClick(){
    if(!this.signInActive){
      this.signInActive=true;
      this.signUpActive=false;
    }
    else {
      this.signInActive=false;
    }
  }

  public getUrlAvatar(): string {
    return this.profile.avatar || 'assets/img/header/user-avatar.png'; 
  }
}
