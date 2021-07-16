import { Component, OnInit } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { mergeMapTo } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.scss']
})
export class FirebaseComponent implements OnInit {
  constructor(private afMessaging: AngularFireMessaging) { }

  ngOnInit() {
    this.listen();
  };

  requestPermission() {
    this.afMessaging.requestPermission
      .pipe(mergeMapTo(this.afMessaging.tokenChanges))
      .subscribe(
        (token) => {
          console.log('Permission granted!');
          console.log(token);
        },
        (error) => {
          console.error(error);
        },
      );
  }
  listen() {
    this.afMessaging.onMessage(
      (message) => {
        console.log(message);
      },
      (error) => {
        console.error(error);
      }
    )
  }
}
