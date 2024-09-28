import { Component, Input } from '@angular/core';
import { ProjetoCardComponent } from "./projeto-card/projeto-card.component";

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [ProjetoCardComponent],
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.css'
})
export class ProjetosComponent {
  @Input()
  projectCover:string =""
  @Input()
  projectTitle:string = ""
  @Input()
  projectDesc:string = ""
}
