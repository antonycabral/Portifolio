import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contatos-dados',
  standalone: true,
  imports: [],
  templateUrl: './contatos.component.html',
  styleUrl: './contatos.component.css'
})
export class ContatosDadosComponent {

  @Input()
  ContactImg:string=""

  @Input()
  ContactTitle:string=""

  @Input()
  ContactDesc:string=""

  @Input()
  contactLink:string=""
}
