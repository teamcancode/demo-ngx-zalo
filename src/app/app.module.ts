import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ZaloCallbackComponent } from './components/zalo-callback/zalo-callback.component';
import { environment } from '../environments/environment';
import { NgxZaloModule, NgxZaloService } from 'ngx-zalo';

const zaloConfigs = {
  version: environment.zaloConfigs.version,
  appId: environment.zaloConfigs.appId,
  redirectUrl: environment.zaloConfigs.redirectUrl,
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ZaloCallbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxZaloModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(ngxZaloService: NgxZaloService) {
    ngxZaloService.init(zaloConfigs);
  }

}
