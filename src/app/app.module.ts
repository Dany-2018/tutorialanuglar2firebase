import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';


export const firebaseConfig = {
  apiKey: "AIzaSyAZHfARaxyFaX09iisJzgd4f4zAIAKgKco",
  authDomain: "agenda-3298f.firebaseapp.com",
  databaseURL: "https://agenda-3298f.firebaseio.com",
  storageBucket: "agenda-3298f.appspot.com",
  messagingSenderId: "115303209303"
};

 

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
