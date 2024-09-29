import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-servico',
  standalone: true,
  imports: [],
  templateUrl: './card-servico.component.html',
  styleUrl: './card-servico.component.css'
})
export class CardServicoComponent {
  @Input()
  servDesc:string =""
  @Input()
  servTitle:string =""
}
