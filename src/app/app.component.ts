import { Component } from '@angular/core';
import {AngularFireAnalytics} from '@angular/fire/analytics';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fire-analytics';

  constructor(private fireAnalytics: AngularFireAnalytics) {
    console.log(fireAnalytics);
    this.fireAnalytics.logEvent('test_page_loaded').catch();
  }

  logEvent() {
    this.fireAnalytics.logEvent('button_event').catch();
  }
}
