import { Component, HostListener, OnInit, Inject, PLATFORM_ID, AfterViewInit,ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faMapMarkerAlt, faMap, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { RouterModule } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements AfterViewInit {
  faPhone = faPhone;
  faEnvelope = faEnvelope;
  faMapMarkerAlt = faMapMarkerAlt;
  faMap = faMap;
  faGlobe = faGlobe;
  faLinkedin = faLinkedin;
  showElement = false;
  isEclecticsVisible = true;
  isCaVisible = true;


  private containers: NodeListOf<Element> | undefined;

  constructor(
    private elRef: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object // To detect the rendering platform
  ) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Select all containers with the class "scroll-container"
      this.containers = this.elRef.nativeElement.querySelectorAll('.scroll-container');
      this.checkVisibility(); // Initial check for containers already in view
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.checkVisibility(); // Trigger visibility check on scroll
    }
  }

  private checkVisibility(): void {
    const windowHeight = window.innerHeight;

    this.containers?.forEach((container) => {
      const rect = container.getBoundingClientRect();
      if (rect.top <= windowHeight - 100) {
        // Add 'visible' class if the container is in view
        container.classList.add('visible');
      }
    });
  }
}
