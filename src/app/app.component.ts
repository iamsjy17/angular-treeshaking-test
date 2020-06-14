import { Component, Inject } from '@angular/core';
import { inject } from '@angular/core/testing';
import { UserConfig, USER_CONFIG } from './feature/feature.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-treeshaking-test';

  userName?: string;

  userAge?: number;

  constructor(@Inject(USER_CONFIG) config: UserConfig) {
    this.userName = config.name;
    this.userAge = config.age;
  }
}
