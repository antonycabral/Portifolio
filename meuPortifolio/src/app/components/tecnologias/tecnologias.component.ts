import { Component, Input, OnInit } from '@angular/core';
import { TechCardComponent } from "./tec-card/card.component";

@Component({
  selector: 'app-tecnologias',
  standalone: true,
  imports: [TechCardComponent],
  templateUrl: './tecnologias.component.html',
  styleUrl: './tecnologias.component.css'
})
export class TecnologiasComponent implements OnInit {

  @Input()
  tecNumber:string =""
  @Input()
  tecTitle:string=""
  @Input()
  tecDesc:string=""

  ngOnInit(): void {
      
  }
}
