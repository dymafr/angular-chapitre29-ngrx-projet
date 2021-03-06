import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from '../../store';
import { isLoggedinSelector } from '../../store/selectors/auth.selectors';
import { Logout } from '../../store/actions/auth.actions';
import { SetFilter, FetchPhotos } from '../../../photos/shared/store/photos.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  public isLoggedin$: Observable<boolean>;

  constructor(
    private store: Store<State>
  ) { }

  ngOnInit() {
    this.isLoggedin$ = this.store.pipe(
      select(isLoggedinSelector)
    );
  }

  public applyFilter(filter: string): void {
    this.store.dispatch(new SetFilter(filter));
    this.store.dispatch(new FetchPhotos());
  }

  public logout(): void {
    this.store.dispatch(new Logout());
  }


}
