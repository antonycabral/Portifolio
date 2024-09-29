import { Component, Input } from '@angular/core';
import { CardServicoComponent } from "./card-servico/card-servico.component";

@Component({
  selector: 'app-servico',
  standalone: true,
  imports: [CardServicoComponent],
  templateUrl: './servico.component.html',
  styleUrl: './servico.component.css'
})
export class ServicoComponent {
  @Input()
  servDesc:string =""
  @Input()
  servTitle:string =""
}
