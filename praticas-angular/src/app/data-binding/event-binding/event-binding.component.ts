import {Component} from '@angular/core';

@Component({
  selector: 'app-event-binding',
  standalone: false,

  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.scss'
})
export class EventBindingComponent {
  mensage: string = 'Mensagem';

  mensageInput: string = ' ';

  buttonText: string = 'Clique em mim!';

  contador: number = 0;

  clickButton() {
    this.mensage = 'Hello World!';
  }

  valorInput(value: string) {
    this.mensageInput = value;
  }

  toggleText() {
    this.buttonText = 'Botão Clicado!';
  }

  incremantaValor() {
    this.contador++;
  }
}
