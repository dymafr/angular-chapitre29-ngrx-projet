import { Route } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { AuthGuard } from './share/guards/auth.guard';

export const APP_ROUTING: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'photos'
  },
  {
    path: 'photos',
    loadChildren: () => import('src/app/photos/photos.module').then(m => m.PhotosModule)
  },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  {
    path: 'profile',
    canActivate: [AuthGuard],
    loadChildren: () => import('src/app/profile/profile.module').then(m => m.ProfileModule)
  }
];
