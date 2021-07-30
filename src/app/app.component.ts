import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  canShowButton=false;
  ServerId=10;
  ServerSide="Offline";
  GetServerStatus()
  {
    return this.ServerSide;
  }
constructor()
{ // es6 Arrow function
  // Changing the canShowButton value to true after 5 seconds
  setTimeout(()=>{
    this.canShowButton=true;
  },5000)
}
}
