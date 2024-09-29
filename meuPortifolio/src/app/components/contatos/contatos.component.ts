import { Component, Input } from '@angular/core';
import { ContatosDadosComponent } from "./contatos/contatos.component";


@Component({
  selector: 'app-contatos',
  standalone: true,
  imports: [ContatosDadosComponent],
  templateUrl: './contatos.component.html',
  styleUrl: './contatos.component.css'
})
export class ContatosComponent {

  @Input()
  ContactImg:string=""

  @Input()
  ContactTitle:string=""

  @Input()
  ContactDesc:string=""

}
