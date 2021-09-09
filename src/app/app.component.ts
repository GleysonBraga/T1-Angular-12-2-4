import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'gulugulu';
  transferencia: any

  transferir($event:any){
    console.log($event)
    this.transferencia = $event



  }
}
