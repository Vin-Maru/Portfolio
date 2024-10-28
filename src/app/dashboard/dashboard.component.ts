import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faMapMarkerAlt, faMap, faGlobe} from '@fortawesome/free-solid-svg-icons';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  faPhone= faPhone;
  faEnvelope=faEnvelope;
  faMapMarkerAlt=faMapMarkerAlt;
  faMap=faMap;
  faGlobe=faGlobe;
  faLinkedin=faLinkedin;

  isEclecticsVisible = false;
  isCaVisible = false;

  toggleDetails(company: string) {
    if (company === 'eclectics') {
      this.isEclecticsVisible = !this.isEclecticsVisible;
    } else if (company === 'ca') {
      this.isCaVisible = !this.isCaVisible;
    }
  }
}
