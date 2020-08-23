import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {AuthService} from '../../auth.service';
import {Router} from '@angular/router';
import {tap} from 'rxjs/operators';
import {DANGER_COLOR, PRIMARY_COLOR, SECONDARY_COLOR, SUCCESS_COLOR, WARNING_COLOR} from '../../configs';

@Component({
  selector: 'app-features',
  templateUrl: './feature-page.component.html',
  styleUrls: ['./feature-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeaturePageComponent implements OnInit {


  constructor(private auth: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
    console.log('stuff');
  }

}
