import {Component, HostListener} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:[trigger('fadeInSlow', [
    state('void, false', style({ opacity: 0 })), // Unsichtbar, wenn nicht gescrollt
    state('true', style({ opacity: 1 })),    // Sichtbar, wenn gescrollt
    transition('void => true', animate('50s ease-in')), // Animation beim Scrollen
    transition('false => true', animate('50s ease-in'))  // Animation beim Scrollen
  ])
]
})
export class HomeComponent {

  isScrolled = false;
  logoPath = 'assets/logo.png';

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if
    (window.pageYOffset > 0) { // Sobald gescrollt wird
      this.isScrolled = true;
      this.logoPath = 'assets/logo-lang.png'
    } else {
      this.isScrolled = false;
      this.logoPath = 'assets/logo.png';
    }
  }
}

