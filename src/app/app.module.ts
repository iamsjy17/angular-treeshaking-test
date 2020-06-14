import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { FeatureModule } from './feature/feature.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeatureModule.forRoot({
      name: 'jewoo',
      age: 31,
    }),
    SharedModule.forRootWithConfig({
      name: 'jacob',
      age: 31,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
