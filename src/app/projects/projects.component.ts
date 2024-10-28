import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faPhone, faEnvelope, faMapMarkerAlt, faMap, faGlobe} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  faPhone= faPhone;
  faEnvelope=faEnvelope;
  faMapMarkerAlt=faMapMarkerAlt;
  faMap=faMap;
  faGlobe=faGlobe;
  faLinkedin=faLinkedin;

  showLanguages = false;
  projects = [
    {
      name: 'Property Management System',
      screenshot: 'assets/property.png',
      description: 'A system for tenants and landlords to manage rental payments, arrears, receipts, and more.',
      languages: ['React', 'Js', 'Bootstrap', 'HTML', 'CSS', 'Tailwind']
    },
    {
      name: 'Admin Dashboard for Open Banking System',
      screenshot: 'assets/admin.png',
      description: 'An admin management dashboard for open banking.',
      languages: ['Angular', 'TypeScript', 'HTML', 'CSS']
    },
    {
      name: 'Portfolio Website',
      screenshot: 'assets/portfolio.png',
      description: 'A portfolio website displaying information about myself.',
      languages: ['Angular','ts', 'HTML', 'CSS']
    },
    {
      name: 'Child Immunization Tracking System',
      description: 'A system for tracking child immunizations.',
      languages: ['React', 'Firebase']
    }
  ];
}
