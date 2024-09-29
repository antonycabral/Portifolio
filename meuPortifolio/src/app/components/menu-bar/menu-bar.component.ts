
import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [NgClass],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css'
})
export class MenuBarComponent
{
  menuActive = false;

  toggleMenu() {
    this.menuActive = !this.menuActive;
  }
  scrollToSection(id: string): void {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
    
}
}
