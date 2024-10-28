import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { faHome, faInfoCircle, faBriefcase, faTools, faEnvelope, faBars, faTimes, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  public navbarStyle: any = {};
  public isMenuVisible: boolean = false; // Track menu visibility
  public isMobile: boolean = false; // Track if the screen is mobile size

  // Icons
  faHome = faHome;
  faInfoCircle = faInfoCircle;
  faBriefcase = faBriefcase; // Icon for Experience
  faTools = faTools; // Icon for Skills
  faEnvelope = faEnvelope;
  faBars = faBars; // Icon for toggle button
  faTimes = faTimes; // Icon for close button
  faProjectDiagram= faProjectDiagram;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.checkScreenSize(); // Check initial screen size
  }

  // Listen for scroll events
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      const scrollY = window.scrollY;
      this.updateNavbarStyle(scrollY);
    }
  }

  // Listen for window resize events
  @HostListener('window:resize', [])
  onResize() {
    if (isPlatformBrowser(this.platformId)) {
      this.checkScreenSize(); // Check screen size on resize
    }
  }

  checkScreenSize() {
    if (isPlatformBrowser(this.platformId)) {
      // Update isMobile based on the window width
      this.isMobile = window.innerWidth < 768; // Adjust threshold as needed
    }
  }

  // Toggle menu on click
  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }

  // Close the menu
  closeMenu() {
    this.isMenuVisible = false;
  }

  // Adjust navbar style on scroll
  updateNavbarStyle(scrollY: number) {
    this.navbarStyle = scrollY > 40
      ? {
          position: 'fixed',
          top: '-0.2', // Reduced top value for closer positioning
          width: '90%',
          
          margins:'40px',
          backgroundColor: '#22203780',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
          height: 'auto',
          padding: '20px',
          
          transition: 'all 0.9s ease-in-out' // Added transition for smooth appearance
        }
      : {
          position: 'relative',
          transition: 'all 0.9s ease-in-out'
        };
  }
  
}
