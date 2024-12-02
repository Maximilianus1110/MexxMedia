import { Component, HostListener } from '@angular/core';
import {NgClass, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [
    NgClass,
  ],
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  isScrolled = false;
  logoIcon = 'logo-klein-white.png';

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if
    (window.pageYOffset > 0) { // Sobald gescrollt wird
      this.isScrolled = true;
      this.logoIcon = 'logo-klein-black.png'
    } else {
      this.isScrolled = false;
      this.logoIcon = 'logo-klein-white.png';
    }
  }
}
