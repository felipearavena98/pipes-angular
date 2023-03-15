import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombrelower: string = 'felipe';
  nombreUpper: string = 'FELIPE';
  nombreCompleto: string = 'fElIpE ArAvENa';

  fecha: Date = new Date(); // el día de hoy

}
