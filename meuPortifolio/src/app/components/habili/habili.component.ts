import { Component, Input, OnInit } from '@angular/core';
import { CardComponent } from "./card/card.component";

@Component({
  selector: 'app-habili',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './habili.component.html',
  styleUrl: './habili.component.css'
})
export class HabiliComponent implements OnInit {

  @Input()
  habiDesc:String =""
  @Input()
  habiTitle:String =""

  ngOnInit(): void {
      
  }

}
