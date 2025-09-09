import { Component } from '@angular/core';

@Component({
  selector: 'app-card-depoimento',
  templateUrl: './card-depoimento.component.html',
  styleUrls: ['./card-depoimento.component.scss'],
})
export class CardDepoimentoComponent {
  depoimento: string = `
    Recomendo fortemente a Marcenaria Domínio.
    Eles oferecem um serviço personalizado e de alta qualidade
    que excedeu minhas expectativas no meu último projeto.
  `
  autoria: string = 'Mariana Faustino'
}
