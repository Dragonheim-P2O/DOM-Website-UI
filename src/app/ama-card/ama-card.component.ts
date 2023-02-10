import { Component, Input } from '@angular/core';

export interface cardData {
  name: string;
  img: string;
  description: string;
}

@Component({
  selector: 'app-ama-card',
  templateUrl: './ama-card.component.html',
  styleUrls: ['./ama-card.component.scss'],
})
export class AmaCardComponent {
  @Input() cardData: cardData = {
    name: '',
    img: '',
    description: '',
  };
}
