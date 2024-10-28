import { Component } from '@angular/core';
import { faPhone, faEnvelope, faMapMarkerAlt, faMap, faGlobe} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';



@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

  faPhone= faPhone;
  faEnvelope=faEnvelope;
  faMapMarkerAlt=faMapMarkerAlt;
  faMap=faMap;
  faGlobe=faGlobe
  faLinkedin=faLinkedin;

}
