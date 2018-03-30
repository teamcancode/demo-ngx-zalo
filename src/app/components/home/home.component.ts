import { Component } from '@angular/core';
import { NgxZaloService } from 'ngx-zalo/dist/app/shared/services/ngx-zalo.service';

@Component({
  selector: 'demo-ngx-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private _ngxZaloService: NgxZaloService) {
  }

  checkLoginStatus() {
    console.log('Login status:', this._ngxZaloService.isLogin);
  }

  getMyProfile() {
    this._ngxZaloService.getMyProfile().subscribe(result => {
      console.log('My profile:', result);
    });
  }

  getAccessToken() {
    console.log(this._ngxZaloService.accessToken);
  }

  // noinspection JSMethodCanBeStatic
  logoutSuccessfullyAction() {
    console.log('Logout successfully');
  }

}
