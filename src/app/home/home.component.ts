import { Component } from '@angular/core';
import { SessionStorageService } from '../util/models/session.storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})


export class HomeComponent {

  constructor(
    private sessionStorageService: SessionStorageService   ) 
    {

      
    }

  obtenerDeSesion() {
    const data = this.sessionStorageService.getItem('miClave');
    if (data) {
    } else {
    }
  }

}
