import {Component, OnInit} from '@angular/core';
import {SwPush, SwUpdate} from '@angular/service-worker';
import {NotificationsService} from './notifications.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  readonly VAPID_PUBLIC_KEY = 'BIzpNPeBtWMkUDywdZj_YqN9FJ9URk_gb87Qm-_atOh6icMiMlCeY9yJTtvAZC_HbQSEzA4_RG8hOW0kaeUvsVw';

  constructor(
    private swPush: SwPush,
    private swUpdate: SwUpdate,
    private notificationsService: NotificationsService
  ) {
  }

  ngOnInit(): void {

    if (this.swUpdate.isEnabled) {

      this.swUpdate.available.subscribe(() => {

        if (confirm('Nova versão disponível. Carregar nova versão?')) {
          window.location.reload();
        }

      });

    }

    this.swPush.requestSubscription({
      serverPublicKey: this.VAPID_PUBLIC_KEY
    })
      .then(sub => this.notificationsService.addPushSubscriber(sub).subscribe())
      .catch(err => console.error('Could not subscribe to notifications', err));

    this.swPush.notificationClicks.subscribe( notpayload => {
      window.open(notpayload.notification.data.url, '_blank');
    });

  }

}
