import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '../share/modules/layout.module';

import { PROFILE_ROUTES } from './profile.routes';
import { ProfileComponent } from './profile.component';

@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    RouterModule.forChild(PROFILE_ROUTES),
    LayoutModule,
  ],
})
export class ProfileModule { }
