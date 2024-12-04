import {Component} from '@angular/core';

@Component({
  selector: 'app-style-binding',
  standalone: false,

  templateUrl: './style-binding.component.html',
  styleUrl: './style-binding.component.scss'
})
export class StyleBindingComponent {
  isBlue: boolean = false;

  fontSize: number = 16;

  isHighLight: boolean = false;

  bgColor: string = 'white';

  mudarCor() {
    this.isBlue = !this.isBlue;
  }

  aumentarFonte() {
    this.fontSize++;
  }

  diminuirFonte() {
    this.fontSize--;
  }

  mudarDestaque() {
    this.isHighLight = !this.isHighLight;
  }

  mudarBgColor(color: string) {
    this.bgColor = color;
  }

}
