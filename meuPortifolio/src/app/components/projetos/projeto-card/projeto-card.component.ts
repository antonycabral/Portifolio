import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-projeto-card',
  standalone: true,
  imports: [],
  templateUrl: './projeto-card.component.html',
  styleUrl: './projeto-card.component.css'
})
export class ProjetoCardComponent {

  @Input()
  projectCover:string =""
  @Input()
  projectTitle:string = ""
  @Input()
  projectDesc:string = ""

  constructor(){
    
  }
}
