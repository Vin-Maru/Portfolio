import { Component, HostListener, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faMapMarkerAlt, faMap, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { RouterModule } from '@angular/router';
import { isPlatformBrowser } from '@angular/common'; // Importing the necessary function

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  faPhone = faPhone;
  faEnvelope = faEnvelope;
  faMapMarkerAlt = faMapMarkerAlt;
  faMap = faMap;
  faGlobe = faGlobe;
  faLinkedin = faLinkedin;

  isEclecticsVisible = true;
  isCaVisible = true;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    // Check visibility when the component loads
    if (isPlatformBrowser(this.platformId)) {
      this.checkVisibility();
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    // Only run checkVisibility if we are in the browser
    if (isPlatformBrowser(this.platformId)) {
      this.checkVisibility();
    }
  }

  checkVisibility(): void {
    const sections = document.querySelectorAll('.about-me, .skills-section, .experience-section, .contact-section');

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        section.classList.add('visible');
      } else {
        section.classList.remove('visible');
      }
    });
  }

  toggleDetails(company: string) {
    if (company === 'eclectics') {
      this.isEclecticsVisible = !this.isEclecticsVisible;
    } else if (company === 'ca') {
      this.isCaVisible = !this.isCaVisible;
    }
  }
}
