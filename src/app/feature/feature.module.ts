import {
  NgModule,
  ModuleWithProviders,
  InjectionToken,
  Inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestService } from './test.service';
import { TestComponent } from './test/test.component';

export interface UserConfig {
  name: string;
  age: number;
}

export const USER_CONFIG = new InjectionToken<UserConfig>('UserConfig');

@NgModule({
  declarations: [TestComponent],
  exports: [TestComponent],
  imports: [CommonModule],
})
export class FeatureModule {
  static forRoot(@Inject(USER_CONFIG) config: UserConfig): ModuleWithProviders {
    return {
      ngModule: FeatureModule,
      providers: [TestService, { provide: USER_CONFIG, useValue: config }],
    };
  }
}
