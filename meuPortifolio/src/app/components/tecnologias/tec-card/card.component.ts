import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tec-app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class TechCardComponent implements OnInit {

  @Input()
  tecNumber:string =""
  @Input()
  tecTitle:string=""
  @Input()
  tecDesc:string=""

  ngOnInit(): void {
      
  }
}
