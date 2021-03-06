import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxZaloService } from 'ngx-zalo';

@Component({
  selector: 'demo-ngx-zalo-callback',
  templateUrl: './zalo-callback.component.html',
  styleUrls: ['./zalo-callback.component.scss']
})
export class ZaloCallbackComponent {

  constructor(private _router: Router, private _ngxZaloService: NgxZaloService) {
    this._ngxZaloService.updateLoginInfo().subscribe(() => {
      this._router.navigate(['/']);
    });
  }

}
