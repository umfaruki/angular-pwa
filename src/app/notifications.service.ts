import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_URI} from './configs';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  readonly HOST = '';

  constructor(private http: HttpClient) { }

  addPushSubscriber(sub: any) {
    return this.http.post(`${API_URI}/notifications`, sub);
  }
}
