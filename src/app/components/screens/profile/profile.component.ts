import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  login: string;
  psw: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  userRegisterClick() {

  }

  onAuth(ev: Event) {
      // if (this.authService.checkUser(authUser)){
      //   this.userService.setUser(authUser);
      //   //добавляем уникальный token
      //   this.userService.setToken('user-private-token')
      //
      //   this.router.navigate(['tickets/tickets-list'])
      // }как то так??
  }
}
