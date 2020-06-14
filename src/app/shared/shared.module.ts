import { NgModule, Inject, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserConfig, USER_CONFIG } from '../feature/feature.module';

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class SharedModule {
  static forRootWithConfig(
    @Inject(USER_CONFIG) config: UserConfig
  ): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [{ provide: USER_CONFIG, useValue: config }],
    };
  }
}
