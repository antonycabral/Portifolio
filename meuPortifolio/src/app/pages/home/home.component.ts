import { Component } from '@angular/core';
import { TitleComponent } from "../../components/title/title.component";
import { HabiliComponent } from "../../components/habili/habili.component";
import { MenuBarComponent } from "../../components/menu-bar/menu-bar.component";
import { ProjetosComponent } from "../../components/projetos/projetos.component";
import { TecnologiasComponent } from "../../components/tecnologias/tecnologias.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TitleComponent, HabiliComponent, MenuBarComponent, ProjetosComponent, TecnologiasComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
